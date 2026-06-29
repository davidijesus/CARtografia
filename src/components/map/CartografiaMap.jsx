import React, {useState} from 'react';
import LayerToggle from '../ui/LayerToggle';

const layerConfig = [
  ['base2024', 'Base de referência 2024'],
  ['recent2026', 'Evidência recente 2026'],
  ['declaredHydro', 'Hidrografia declarada'],
  ['suggestedHydro', 'Hidrografia sugerida'],
  ['app', 'APP potencial'],
  ['points', 'Pontos de validação'],
];

export default function CartografiaMap() {
  const [layers, setLayers] = useState({
    base2024: true,
    recent2026: true,
    declaredHydro: true,
    suggestedHydro: true,
    app: true,
    points: true,
  });

  function toggleLayer(key, value) {
    setLayers((current) => ({...current, [key]: value}));
  }

  return (
    <div className="map-card">
      <div className="map-visual" aria-label="Mapa comparativo de hidrografia e APP">
        <svg viewBox="0 0 760 460" role="img">
          <defs>
            <pattern id="grid" width="38" height="38" patternUnits="userSpaceOnUse">
              <path d="M 38 0 L 0 0 0 38" fill="none" stroke="#d8e4dc" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="760" height="460" fill="#edf5ef" />
          <rect width="760" height="460" fill="url(#grid)" />
          {layers.recent2026 && (
            <path
              d="M0 332 C110 310 168 356 254 330 C345 303 395 250 480 267 C602 292 650 220 760 245 L760 460 L0 460 Z"
              fill="#d9ecd9"
            />
          )}
          {layers.base2024 && (
            <polygon
              points="138,78 630,108 675,356 186,394 95,244"
              fill="#fff"
              fillOpacity="0.42"
              stroke="#475467"
              strokeWidth="3"
              strokeDasharray="8 6"
            />
          )}
          <polygon
            points="185,116 584,138 620,330 218,355 142,244"
            fill="#ffffff"
            fillOpacity="0.54"
            stroke="#2f5d46"
            strokeWidth="2"
          />
          {layers.app && (
            <path
              d="M120 267 C210 206 276 212 361 248 C446 284 547 282 654 211"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="40"
              strokeOpacity="0.25"
            />
          )}
          {layers.declaredHydro && (
            <path
              d="M112 274 C202 215 285 224 360 260 C446 301 548 288 658 220"
              fill="none"
              stroke="#1351b4"
              strokeWidth="7"
              strokeLinecap="round"
            />
          )}
          {layers.suggestedHydro && (
            <path
              d="M116 242 C210 188 288 199 372 232 C462 268 552 258 666 190"
              fill="none"
              stroke="#b42318"
              strokeWidth="6"
              strokeDasharray="12 8"
              strokeLinecap="round"
            />
          )}
          <polygon
            points="340,220 482,247 448,306 313,281"
            fill="#b42318"
            fillOpacity="0.18"
            stroke="#b42318"
            strokeWidth="2"
          />
          {layers.points &&
            [
              [330, 232, 'P1'],
              [455, 267, 'P2'],
              [552, 224, 'P3'],
            ].map(([x, y, label]) => (
              <g key={label}>
                <circle cx={x} cy={y} r="14" fill="#42916e" stroke="#fff" strokeWidth="3" />
                <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fill="#fff" fontWeight="800">
                  {label}
                </text>
              </g>
            ))}
          <rect x="18" y="18" width="256" height="92" rx="8" fill="#fff" stroke="#d0d5dd" />
          <text x="34" y="44" fontSize="14" fontWeight="800" fill="#1f2937">
            Recorte CAR-BA-000184
          </text>
          <text x="34" y="68" fontSize="12" fill="#667085">
            Divergência entre hidrografia 2024 e 2026
          </text>
          <text x="34" y="90" fontSize="12" fill="#667085">
            Área potencial de APP: 18,4 ha
          </text>
        </svg>
      </div>
      <div className="layer-list">
        <h3 className="section-title">Camadas</h3>
        {layerConfig.map(([key, label]) => (
          <LayerToggle key={key} label={label} checked={layers[key]} onChange={(value) => toggleLayer(key, value)} />
        ))}
        <div className="notice">
          Mapa offline para gravação. As geometrias são simuladas e não representam dado real do SiCAR.
        </div>
      </div>
    </div>
  );
}
