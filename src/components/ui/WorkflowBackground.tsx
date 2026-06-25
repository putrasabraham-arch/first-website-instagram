"use client";

import { useEffect, useRef } from "react";
import { workflowNodes, workflowConnections } from "@/data/portfolio";

export default function WorkflowBackground({ variant = "intro" }: { variant?: "intro" | "main" }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const nodes = containerRef.current?.querySelectorAll("[data-node]");
      nodes?.forEach((node, i) => {
        const offset = i * 0.5;
        const floatY = Math.sin(elapsed * 0.3 + offset) * 10;
        const floatX = Math.cos(elapsed * 0.2 + offset) * 5;
        (node as HTMLElement).style.transform = `translate(${floatX}px, ${floatY}px)`;
      });

      const lines = containerRef.current?.querySelectorAll("[data-flow-line]");
      lines?.forEach((line, i) => {
        const dashOffset = ((elapsed * 20 + i * 10) % 200);
        (line as HTMLElement).style.strokeDashoffset = String(dashOffset);
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  if (variant === "main") {
    return (
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {workflowConnections.map(([from, to], i) => {
            const fromNode = workflowNodes.find((n) => n.id === from);
            const toNode = workflowNodes.find((n) => n.id === to);
            if (!fromNode || !toNode) return null;
            return (
              <line
                key={`conn-${i}`}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={fromNode.color}
                strokeWidth="0.15"
                strokeOpacity="0.3"
                data-flow-line
                strokeDasharray="4 3"
                style={{ transition: "none" }}
              />
            );
          })}

          {workflowNodes.map((node) => (
            <g key={node.id} data-node style={{ transition: "transform 0.1s ease-out" }}>
              <circle cx={node.x} cy={node.y} r="4" fill="url(#nodeGlow)" opacity="0.6" />
              <circle
                cx={node.x}
                cy={node.y}
                r="1.5"
                fill={node.color}
                opacity="0.6"
                filter="url(#glow)"
              />
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fill="#94A3B8"
                fontSize="2.5"
                fontWeight="300"
                opacity="0.5"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="nodeGlowIntro" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
          <filter id="glowIntro">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {workflowConnections.map(([from, to], i) => {
          const fromNode = workflowNodes.find((n) => n.id === from);
          const toNode = workflowNodes.find((n) => n.id === to);
          if (!fromNode || !toNode) return null;
          return (
            <line
              key={`conn-${i}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={fromNode.color}
              strokeWidth="0.2"
              strokeOpacity="0.25"
              data-flow-line
              strokeDasharray="4 3"
              style={{ transition: "none" }}
            />
          );
        })}

        {workflowNodes.map((node) => (
          <g key={node.id} data-node style={{ transition: "transform 0.1s ease-out" }}>
            <circle cx={node.x} cy={node.y} r="5" fill="url(#nodeGlowIntro)" opacity="0.5" />
            <circle
              cx={node.x}
              cy={node.y}
              r="2"
              fill={node.color}
              opacity="0.7"
              filter="url(#glowIntro)"
            />
            <text
              x={node.x}
              y={node.y + 4.5}
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="2.8"
              fontWeight="400"
              opacity="0.6"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
