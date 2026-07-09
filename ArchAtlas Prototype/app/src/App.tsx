import * as React from 'react';
import fakeData from '../../fake-data.json';

type Screen =
  | 'welcome'
  | 'scan-progress'
  | 'scan-summary'
  | 'atlas';

type AtlasView = 'system-map' | 'method-paths' | 'rules' | 'change-impact';
type SelectionType = 'project' | 'class' | 'external-system' | 'method-path' | 'warning' | 'change-impact';

type Selection = {
  type: SelectionType;
  id: string;
};

type AtlasNodePosition = {
  id: string;
  x: number;
  y: number;
  label: string;
};

const flowScreens: { id: Screen; label: string }[] = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'scan-progress', label: 'Scan' },
  { id: 'scan-summary', label: 'Summary' },
  { id: 'atlas', label: 'Atlas' },
];

const atlasNodePositions: AtlasNodePosition[] = [
  { id: 'project-api', label: 'API', x: 80, y: 90 },
  { id: 'project-application', label: 'Application', x: 370, y: 210 },
  { id: 'project-domain', label: 'Domain', x: 150, y: 410 },
  { id: 'project-infrastructure', label: 'Infrastructure', x: 370, y: 430 },
  { id: 'project-messaging', label: 'Messaging', x: 610, y: 410 },
  { id: 'external-order-api', label: 'External API', x: 115, y: 610 },
  { id: 'external-sql-server', label: 'SQL Server', x: 390, y: 640 },
  { id: 'external-service-bus', label: 'Service Bus', x: 625, y: 620 },
];

const methodPath = fakeData.methodPaths[0];
const warning = fakeData.warnings[0];
const changeImpact = fakeData.changeImpact;

function App() {
  const [screen, setScreen] = React.useState<Screen>('welcome');
  const [activeView, setActiveView] = React.useState<AtlasView>('system-map');
  const [selection, setSelection] = React.useState<Selection>({ type: 'project', id: 'project-application' });
  const [insightsCollapsed, setInsightsCollapsed] = React.useState(false);

  const goNext = () => {
    const index = flowScreens.findIndex((item) => item.id === screen);
    const next = flowScreens[Math.min(index + 1, flowScreens.length - 1)];
    setScreen(next.id);
  };

  const openAtlasView = (view: AtlasView, nextSelection?: Selection) => {
    setScreen('atlas');
    setActiveView(view);

    if (nextSelection) {
      setSelection(nextSelection);
      return;
    }

    if (view === 'system-map') {
      setSelection({ type: 'project', id: 'project-application' });
    }

    if (view === 'method-paths') {
      setSelection({ type: 'method-path', id: methodPath.id });
    }

    if (view === 'rules') {
      setSelection({ type: 'warning', id: warning.id });
    }

    if (view === 'change-impact') {
      setSelection({ type: 'change-impact', id: changeImpact.id });
    }
  };

  return (
    <main className="app-shell">
      <TopBar screen={screen} setScreen={setScreen} openAtlasView={openAtlasView} />
      {screen === 'welcome' && <Welcome onOpen={goNext} />}
      {screen === 'scan-progress' && <ScanProgress onComplete={goNext} />}
      {screen === 'scan-summary' && <ScanSummary onExplore={() => openAtlasView('system-map')} />}
      {screen === 'atlas' && (
        <AtlasScreen
          activeView={activeView}
          selection={selection}
          setSelection={setSelection}
          openAtlasView={openAtlasView}
          insightsCollapsed={insightsCollapsed}
          setInsightsCollapsed={setInsightsCollapsed}
        />
      )}
    </main>
  );
}

function TopBar({
  screen,
  setScreen,
  openAtlasView,
}: {
  screen: Screen;
  setScreen: (screen: Screen) => void;
  openAtlasView: (view: AtlasView) => void;
}) {
  return (
    <header className="top-bar">
      <div>
        <strong>ArchAtlas</strong>
        <span className="muted"> / {fakeData.repository.name}</span>
      </div>
      <nav className="flow-nav" aria-label="Prototype flow">
        {flowScreens.map((item) => (
          <button
            key={item.id}
            className={screen === item.id ? 'active' : ''}
            onClick={() => item.id === 'atlas' ? openAtlasView('system-map') : setScreen(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="search-pill">Search Ctrl+K</div>
    </header>
  );
}

function Welcome({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="center-screen welcome-screen">
      <div className="hero-card">
        <p className="eyebrow">Local-first software atlas</p>
        <h1>ArchAtlas</h1>
        <h2>A map for your codebase.</h2>
        <p>Understand software systems from architecture overview to method-level paths.</p>
        <button className="primary-button" onClick={onOpen}>Open Repository</button>
        <p className="trust-line">Your source code never leaves your machine.</p>
      </div>
      <section className="recent-projects">
        <h3>Recent Projects</h3>
        <div className="card-grid">
          <ProjectCard name="OrderFlow" meta="5 projects · 42 classes" active />
          <ProjectCard name="IntegrationPlatform" meta="18 projects · 934 classes" />
          <ProjectCard name="NASA" meta="42 projects · 3,502 classes" />
        </div>
      </section>
    </section>
  );
}

function ProjectCard({ name, meta, active = false }: { name: string; meta: string; active?: boolean }) {
  return (
    <article className={`project-card ${active ? 'active-card' : ''}`}>
      <strong>{name}</strong>
      <span>Last scanned: Today</span>
      <span>{meta}</span>
    </article>
  );
}

function ScanProgress({ onComplete }: { onComplete: () => void }) {
  const steps = [
    'Reading repository',
    'Finding solution and projects',
    'Parsing C# code',
    'Building architecture graph',
    'Finding method paths',
    'Detecting dependencies',
    'Checking architecture rules',
  ];

  return (
    <section className="center-screen">
      <div className="scan-card">
        <p className="eyebrow">Building Software Atlas</p>
        <h1>{fakeData.repository.name}</h1>
        <ol className="scan-list">
          {steps.map((step, index) => (
            <li key={step} className={index < 5 ? 'done' : index === 5 ? 'current' : ''}>
              <span>{index < 5 ? '✓' : index === 5 ? '▸' : '○'}</span>
              {step}
            </li>
          ))}
        </ol>
        <div className="progress-bar"><span /></div>
        <p className="trust-line">Source code is analyzed locally. Nothing is uploaded.</p>
        <button className="primary-button" onClick={onComplete}>Continue to Scan Summary</button>
      </div>
    </section>
  );
}

function ScanSummary({ onExplore }: { onExplore: () => void }) {
  const summary = fakeData.repository.summary;

  return (
    <section className="center-screen">
      <div className="summary-card">
        <p className="eyebrow">Scan Complete</p>
        <h1>{fakeData.repository.name}</h1>
        <div className="metric-grid">
          <Metric label="Projects" value={summary.projects} />
          <Metric label="Namespaces" value={summary.namespaces} />
          <Metric label="Classes" value={summary.classes} />
          <Metric label="Methods" value={summary.methods} />
        </div>
        <div className="summary-columns">
          <div>
            <h3>Architecture checks</h3>
            <p>✓ {summary.architectureChecks.passed} passed</p>
            <p>⚠ {summary.architectureChecks.warnings} warning</p>
          </div>
          <div>
            <h3>External systems detected</h3>
            {summary.externalSystems.map((system) => <p key={system}>• {system}</p>)}
          </div>
        </div>
        <button className="primary-button" onClick={onExplore}>Explore Atlas</button>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function AtlasScreen({
  activeView,
  selection,
  setSelection,
  openAtlasView,
  insightsCollapsed,
  setInsightsCollapsed,
}: {
  activeView: AtlasView;
  selection: Selection;
  setSelection: (selection: Selection) => void;
  openAtlasView: (view: AtlasView, selection?: Selection) => void;
  insightsCollapsed: boolean;
  setInsightsCollapsed: (collapsed: boolean) => void;
}) {
  return (
    <section className={`atlas-layout ${insightsCollapsed ? 'insights-collapsed' : ''}`}>
      <aside className="explorer-panel">
        <Explorer activeView={activeView} selection={selection} setSelection={setSelection} openAtlasView={openAtlasView} />
      </aside>
      <section className="software-atlas">
        <AtlasMap activeView={activeView} selection={selection} setSelection={setSelection} openAtlasView={openAtlasView} />
      </section>
      <aside className="insights-panel">
        <button className="collapse-button" onClick={() => setInsightsCollapsed(!insightsCollapsed)}>
          {insightsCollapsed ? '>' : '<'}
        </button>
        {!insightsCollapsed && <Insights selection={selection} openAtlasView={openAtlasView} />}
      </aside>
    </section>
  );
}

function Explorer({
  activeView,
  selection,
  setSelection,
  openAtlasView,
}: {
  activeView: AtlasView;
  selection: Selection;
  setSelection: (selection: Selection) => void;
  openAtlasView: (view: AtlasView, selection?: Selection) => void;
}) {
  return (
    <div>
      <PanelTitle title="Explorer" subtitle="Views first" />
      <h3>Views</h3>
      <button className={`nav-row ${activeView === 'system-map' ? 'active' : ''}`} onClick={() => openAtlasView('system-map')}>System Map</button>
      <button className={`nav-row ${activeView === 'method-paths' ? 'active' : ''}`} onClick={() => openAtlasView('method-paths')}>Method Paths</button>
      <button className={`nav-row ${activeView === 'rules' ? 'active' : ''}`} onClick={() => openAtlasView('rules')}>Rules</button>
      <button className={`nav-row ${activeView === 'change-impact' ? 'active' : ''}`} onClick={() => openAtlasView('change-impact')}>Change Impact</button>

      <h3>Projects</h3>
      {fakeData.projects.map((project) => (
        <button
          key={project.id}
          className={`nav-row ${selection.type === 'project' && selection.id === project.id ? 'selected' : ''}`}
          onClick={() => {
            openAtlasView('system-map', { type: 'project', id: project.id });
          }}
        >
          {project.name.replace('OrderFlow.', '')}
        </button>
      ))}

      <h3>Application</h3>
      {fakeData.classes
        .filter((item) => item.projectId === 'project-application')
        .map((item) => (
          <button
            key={item.id}
            className={`nav-row ${selection.type === 'class' && selection.id === item.id ? 'selected' : ''}`}
            onClick={() => {
              openAtlasView('system-map', { type: 'class', id: item.id });
            }}
          >
            {item.name}
          </button>
        ))}

      <h3>Warnings</h3>
      <button
        className={`nav-row ${selection.type === 'warning' ? 'selected' : ''}`}
        onClick={() => openAtlasView('rules', { type: 'warning', id: warning.id })}
      >
        ⚠ {warning.title}
      </button>
    </div>
  );
}

function AtlasMap({
  activeView,
  selection,
  setSelection,
  openAtlasView,
}: {
  activeView: AtlasView;
  selection: Selection;
  setSelection: (selection: Selection) => void;
  openAtlasView: (view: AtlasView, selection?: Selection) => void;
}) {
  const title = activeView === 'change-impact'
    ? 'Change Impact'
    : activeView === 'method-paths'
      ? 'Order Import Flow'
      : activeView === 'rules'
        ? 'Architecture Rules'
        : 'System Map';

  return (
    <div className="map-surface">
      <div className="map-header">
        <div>
          <p className="eyebrow">Software Atlas</p>
          <h2>{title}</h2>
        </div>
        <div className="legend">
          <span>● normal</span>
          <span>◆ changed</span>
          <span>⚠ warning</span>
        </div>
      </div>

      <div className="graph-canvas">
        <svg className="edge-layer" viewBox="0 0 860 740" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" />
            </marker>
          </defs>
          {fakeData.graph.edges.map((edge) => {
            const source = atlasNodePositions.find((node) => node.id === edge.source);
            const target = atlasNodePositions.find((node) => node.id === edge.target);
            if (!source || !target) return null;

            const isWarning = edge.warningId === warning.id;
            const isChanged = Boolean(edge.isChanged) || activeView === 'change-impact' && changeImpact.changedEdges.includes(edge.id);
            const isDimmed = activeView === 'change-impact' && !isChanged;

            return (
              <path
                key={edge.id}
                className={`edge-path ${isWarning ? 'warning' : ''} ${isChanged ? 'changed' : ''} ${isDimmed ? 'dimmed' : ''}`}
                d={`M ${source.x + 82} ${source.y + 36} C ${source.x + 130} ${source.y + 36}, ${target.x - 40} ${target.y + 36}, ${target.x} ${target.y + 36}`}
                markerEnd="url(#arrow)"
              />
            );
          })}
        </svg>

        {atlasNodePositions.map((position) => {
          const graphNode = fakeData.graph.nodes.find((node) => node.id === position.id);
          const isSelected = selection.id === position.id;
          const isChanged = Boolean(graphNode?.isChanged) || activeView === 'change-impact' && changeImpact.changedNodes.includes(position.id);
          const isDimmed = activeView === 'change-impact' && !isChanged;

          return (
            <button
              key={position.id}
              className={`graph-node ${isSelected ? 'selected' : ''} ${isChanged ? 'changed' : ''} ${isDimmed ? 'dimmed' : ''}`}
              style={{ left: position.x, top: position.y }}
              onClick={() => {
                const project = fakeData.projects.find((item) => item.id === position.id);
                const external = fakeData.externalSystems.find((item) => item.id === position.id);

                if (project) {
                  setSelection({ type: 'project', id: project.id });
                }

                if (external) {
                  setSelection({ type: 'external-system', id: external.id });
                }
              }}
            >
              <span>{isChanged ? '◆' : '●'}</span>
              {position.label}
            </button>
          );
        })}
      </div>

      <div className="path-strip">
        {methodPath.steps.map((step) => (
          <button
            key={step.methodId}
            className={step.isChanged ? 'changed-step' : ''}
            onClick={() => openAtlasView('method-paths', { type: 'method-path', id: methodPath.id })}
          >
            {step.order}. {step.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Insights({ selection, openAtlasView }: { selection: Selection; openAtlasView: (view: AtlasView, selection?: Selection) => void }) {
  if (selection.type === 'class') {
    const item = fakeData.classes.find((classItem) => classItem.id === selection.id);
    return item ? <ClassInsights item={item} openAtlasView={openAtlasView} /> : null;
  }

  if (selection.type === 'method-path') {
    return <MethodPathInsights openAtlasView={openAtlasView} />;
  }

  if (selection.type === 'warning') {
    return <WarningInsights openAtlasView={openAtlasView} />;
  }

  if (selection.type === 'change-impact') {
    return <ChangeImpactInsights />;
  }

  if (selection.type === 'external-system') {
    const item = fakeData.externalSystems.find((system) => system.id === selection.id);
    return item ? <ExternalSystemInsights item={item} /> : null;
  }

  const project = fakeData.projects.find((item) => item.id === selection.id) ?? fakeData.projects[1];
  return <ProjectInsights project={project} openAtlasView={openAtlasView} />;
}

function ProjectInsights({ project, openAtlasView }: { project: typeof fakeData.projects[number]; openAtlasView: (view: AtlasView, selection?: Selection) => void }) {
  const projectClasses = fakeData.classes.filter((item) => item.projectId === project.id);

  return (
    <div>
      <PanelTitle title={project.name.replace('OrderFlow.', '')} subtitle="Selected project" />
      <InsightSection title="Purpose" evidence={project.evidence}>{project.description}</InsightSection>
      <InsightSection title="Classes" evidence="Verified from code">{projectClasses.length || 'None in fake data yet'}</InsightSection>
      <InsightSection title="Source" evidence="Verified from code">{project.sourceLocation.path}</InsightSection>
      <button className="secondary-button" onClick={() => openAtlasView('method-paths')}>View Order Import Flow</button>
      <button className="secondary-button" onClick={() => openAtlasView('change-impact')}>View Change Impact</button>
    </div>
  );
}

function ClassInsights({ item, openAtlasView }: { item: typeof fakeData.classes[number]; openAtlasView: (view: AtlasView, selection?: Selection) => void }) {
  return (
    <div>
      <PanelTitle title={item.name} subtitle="Selected class" />
      <InsightSection title="Purpose" evidence={item.purpose.evidence}>{item.purpose.text}</InsightSection>
      <InsightSection title="Part of" evidence={item.role.evidence}>{item.role.text}</InsightSection>
      <InsightSection title="Calls" evidence="Verified from code">
        {item.calls.map((id) => fakeData.classes.find((classItem) => classItem.id === id)?.name ?? fakeData.externalSystems.find((system) => system.id === id)?.name).filter(Boolean).join(', ') || 'None'}
      </InsightSection>
      <InsightSection title="Source" evidence="Verified from code">
        {item.sourceLocation.path}<br />line {item.sourceLocation.line}
      </InsightSection>
      <button className="secondary-button">Open in editor</button>
      <button className="secondary-button">Copy path</button>
      <button className="secondary-button" onClick={() => openAtlasView('method-paths')}>View Method Path</button>
      <button className="secondary-button" onClick={() => openAtlasView('change-impact')}>View Change Impact</button>
    </div>
  );
}

function ExternalSystemInsights({ item }: { item: typeof fakeData.externalSystems[number] }) {
  return (
    <div>
      <PanelTitle title={item.name} subtitle="External system" />
      <InsightSection title="Purpose" evidence={item.evidence}>{item.description}</InsightSection>
      <InsightSection title="Used by" evidence="Derived from graph">
        {fakeData.graph.edges.filter((edge) => edge.target === item.id).map((edge) => atlasNodePositions.find((node) => node.id === edge.source)?.label).join(', ')}
      </InsightSection>
    </div>
  );
}

function MethodPathInsights({ openAtlasView }: { openAtlasView: (view: AtlasView, selection?: Selection) => void }) {
  return (
    <div>
      <PanelTitle title={methodPath.name} subtitle="Method path" />
      <InsightSection title="Evidence" evidence={methodPath.evidence}>{methodPath.description}</InsightSection>
      <InsightSection title="Steps" evidence="Derived from graph">{methodPath.steps.length}</InsightSection>
      <InsightSection title="Touches" evidence="Derived from graph">{methodPath.touches.join(', ')}</InsightSection>
      <InsightSection title="Warning" evidence={warning.evidence}>{warning.title}</InsightSection>
      <InsightSection title="Key source locations" evidence="Verified from code">
        {methodPath.steps.map((step) => {
          const method = fakeData.methods.find((item) => item.id === step.methodId);
          return <p key={step.methodId}>{method?.fullName}: line {method?.sourceLocation.line}</p>;
        })}
      </InsightSection>
      <button className="secondary-button" onClick={() => openAtlasView('rules')}>View Warning</button>
      <button className="secondary-button" onClick={() => openAtlasView('change-impact')}>View Change Impact</button>
    </div>
  );
}

function WarningInsights({ openAtlasView }: { openAtlasView: (view: AtlasView, selection?: Selection) => void }) {
  return (
    <div>
      <PanelTitle title={warning.title} subtitle="Architecture warning" />
      <InsightSection title="Summary" evidence={warning.evidence}>{warning.summary}</InsightSection>
      <InsightSection title="Why it matters" evidence="Rule explanation">{warning.whyItMatters}</InsightSection>
      <InsightSection title="Source" evidence="Verified from code">
        {warning.sourceLocations.map((item) => <p key={`${item.path}-${item.line}`}>{item.path}: line {item.line}</p>)}
      </InsightSection>
      <button className="secondary-button" onClick={() => openAtlasView('change-impact')}>View Change Impact</button>
    </div>
  );
}

function ChangeImpactInsights() {
  return (
    <div>
      <PanelTitle title="Change Impact" subtitle={`Compared to ${changeImpact.comparedTo}`} />
      <div className="metric-grid small">
        <Metric label="Files" value={changeImpact.summary.changedFiles} />
        <Metric label="Classes" value={changeImpact.summary.changedClasses} />
        <Metric label="Methods" value={changeImpact.summary.changedMethods} />
        <Metric label="Warnings" value={changeImpact.summary.warnings} />
      </div>
      <InsightSection title="Affected path" evidence="Derived from graph">Order Import Flow</InsightSection>
      <InsightSection title="Warning" evidence={warning.evidence}>{warning.title}</InsightSection>
      <InsightSection title="Look at first" evidence="Derived from graph">
        {changeImpact.reviewPriority.map((item) => (
          <p key={item.label}>{item.sourceLocation.path}: line {item.sourceLocation.line}</p>
        ))}
      </InsightSection>
    </div>
  );
}

function PanelTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="panel-title">
      <p className="eyebrow">{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

function InsightSection({ title, evidence, children }: { title: string; evidence?: string; children: React.ReactNode }) {
  return (
    <section className="insight-section">
      <div className="insight-heading">
        <h3>{title}</h3>
        {evidence && <span className="evidence-label">{evidence}</span>}
      </div>
      <div className="insight-content">{children}</div>
    </section>
  );
}

export default App;
