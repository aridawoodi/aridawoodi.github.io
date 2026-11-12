import { useEffect, useId, useRef, useState } from "react";

let configured = false;

async function loadMermaid() {
  const mermaid = (await import("mermaid")).default;
  if (!configured) {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      themeVariables: {
        background: "#fcfcfb",
        primaryColor: "#e5f2ed",
        primaryTextColor: "#1a1d19",
        primaryBorderColor: "#0c5c48",
        secondaryColor: "#f3f4f1",
        secondaryTextColor: "#1a1d19",
        secondaryBorderColor: "#d5d8d2",
        tertiaryColor: "#fcfcfb",
        tertiaryTextColor: "#1a1d19",
        tertiaryBorderColor: "#d5d8d2",
        lineColor: "#5c635c",
        textColor: "#1a1d19",
        mainBkg: "#e5f2ed",
        nodeBorder: "#0c5c48",
        clusterBkg: "#f3f4f1",
        clusterBorder: "#d5d8d2",
        titleColor: "#1a1d19",
        edgeLabelBackground: "#fcfcfb",
        fontFamily: '"IBM Plex Sans", "Segoe UI", sans-serif',
        fontSize: "14px",
      },
      flowchart: {
        curve: "basis",
        padding: 12,
        htmlLabels: true,
        nodeSpacing: 28,
        rankSpacing: 40,
      },
    });
    configured = true;
  }
  return mermaid;
}

type MermaidDiagramProps = {
  chart: string;
  title: string;
};

export function MermaidDiagram({ chart, title }: MermaidDiagramProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/:/g, "");
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    let cancelled = false;
    if (!hostRef.current) return;

    setStatus("loading");
    hostRef.current.innerHTML = "";

    async function draw() {
      try {
        const mermaid = await loadMermaid();
        const { svg } = await mermaid.render(`diagram-${reactId}`, chart);
        if (cancelled || !hostRef.current) return;
        const node = hostRef.current;
        node.innerHTML = svg;
        const svgEl = node.querySelector("svg");
        if (svgEl) {
          svgEl.setAttribute("role", "img");
          svgEl.setAttribute("aria-label", title);
          svgEl.removeAttribute("height");
          svgEl.style.maxWidth = "100%";
          svgEl.style.height = "auto";
        }
        setStatus("ready");
      } catch {
        if (!cancelled && hostRef.current) {
          hostRef.current.innerHTML = "";
          setStatus("error");
        }
      }
    }

    void draw();
    return () => {
      cancelled = true;
    };
  }, [chart, reactId, title]);

  return (
    <div className="system-diagram">
      <h4>System diagram</h4>
      <div
        ref={hostRef}
        className="mermaid-host"
        aria-busy={status === "loading"}
      />
      {status === "error" ? (
        <p className="diagram-fallback">
          The system diagram could not be drawn. The path above still describes
          the flow.
        </p>
      ) : null}
    </div>
  );
}
