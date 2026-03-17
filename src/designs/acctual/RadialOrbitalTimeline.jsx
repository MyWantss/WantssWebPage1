"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import "./RadialOrbitalTimeline.css";
import { GlowingEffect } from "./GlowingEffect";

export default function RadialOrbitalTimeline({ timelineData, centerTitle, centerDescription }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState({});
  const [centerOffset] = useState({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState(null);
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const getRelatedItems = (itemId) => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) clearInterval(rotationTimer);
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 260;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const isRelatedToActive = (itemId) => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "completed":
        return "COMPLETE";
      case "in-progress":
        return "IN PROGRESS";
      case "pending":
        return "PENDING";
      default:
        return status;
    }
  };

  return (
    <div
      className="rot-container"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="rot-viewport">
        <div
          className="rot-orbit-area"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Center nucleus */}
          <div className="rot-nucleus">
            <div className="rot-nucleus-ping" />
            <div
              className="rot-nucleus-ping rot-nucleus-ping--delayed"
            />
            <div className="rot-nucleus-core" />
          </div>
          {centerTitle && (
            <div className="rot-center-label">
              <div className="rot-center-title">{centerTitle}</div>
              {centerDescription && (
                <div className="rot-center-desc">{centerDescription}</div>
              )}
            </div>
          )}

          {/* Orbit ring */}
          <div className="rot-orbit-ring" />

          {/* Nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="rot-node"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Energy glow */}
                <div
                  className={`rot-node-glow ${isPulsing ? "rot-node-glow--pulse" : ""}`}
                  style={{
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                />

                {/* Node circle */}
                <div
                  className={`rot-node-circle ${
                    isExpanded
                      ? "rot-node-circle--expanded"
                      : isRelated
                      ? "rot-node-circle--related"
                      : ""
                  }`}
                  style={{ position: 'relative' }}
                >
                  <GlowingEffect spread={30} proximity={48} inactiveZone={0.01} borderWidth={2} disabled={false} />
                  <Icon size={16} />
                </div>

                {/* Label */}
                <div
                  className={`rot-node-label ${
                    isExpanded ? "rot-node-label--active" : ""
                  }`}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <div className="rot-card" style={{ position: 'relative' }}>
                    <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} disabled={false} />
                    <div className="rot-card-stem" />
                    <div className="rot-card-header">
                      <span className={`rot-badge rot-badge--${item.status}`}>
                        {getStatusLabel(item.status)}
                      </span>
                      <span className="rot-card-date">{item.date}</span>
                    </div>
                    <h4 className="rot-card-title">{item.title}</h4>
                    <p className="rot-card-content">{item.content}</p>

                    {/* Energy bar */}
                    <div className="rot-energy">
                      <div className="rot-energy-header">
                        <span className="rot-energy-label">
                          <Zap size={10} /> Potential Impact
                        </span>
                        <span className="rot-energy-value">{item.energy}%</span>
                      </div>
                      <div className="rot-energy-track">
                        <div
                          className="rot-energy-fill"
                          style={{ width: `${item.energy}%` }}
                        />
                      </div>
                    </div>

                    {/* Connected nodes */}
                    {item.relatedIds.length > 0 && (
                      <div className="rot-connections">
                        <div className="rot-connections-header">
                          <Link size={10} />
                          <span>Connected Nodes</span>
                        </div>
                        <div className="rot-connections-list">
                          {item.relatedIds.map((relatedId) => {
                            const relatedItem = timelineData.find(
                              (i) => i.id === relatedId
                            );
                            return (
                              <button
                                key={relatedId}
                                className="rot-connection-btn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleItem(relatedId);
                                }}
                              >
                                {relatedItem?.title}
                                <ArrowRight size={8} />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
