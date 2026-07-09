import fakeData from '../../fake-data.json';

type Screen =
  | 'welcome'
  | 'scan-progress'
  | 'scan-summary'
  | 'system-map'
  | 'class-insights'
  | 'method-path'
  | 'change-impact';

const screens: { id: Screen; label: string }[] = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'scan-progress', label: 'Scan' },
  { id: 'scan-summary', label: 'Summary' },
  { id: 'system-map', label: 'Atlas' },
  { id: 'class-insights', label: 'Class' },
  { id: 'method-path', label: 'Path' },
  { id: 'change-impact', label: 'Impact' },
];

const selectedProject = fakeData.projects.find((project) => project.id === 'project-application')!;
const selectedClass = fakeData.classes.find((item) => item.id === 'class-import-order-handler')!;
const methodPath = fakeData.methodPaths[0];
const warning = fakeData.warnings[0];
const changeImpact = fakeData.changeImpact;

function App() {
  const [screen, setScreen] = React.useState<Screen>('welcome');
  const [insightsCollapsed, setInsightsCollapsed] = React.useState(false);

  const goNext = () => {
    const index = screens.findIndex((item) => item.id === screen);
    const next = screens[Math.min(index + 1, screens.length - 1)];
    setScreen(next.id);
  };

  return (
    <main className="app-shell">
      <TopBar screen={screen} setScreen={setScreen} />
      {screen === 'welcome' && <Welcome onOpen={goNext} />}
      {screen === 'scan-progress' && <ScanProgress onComplete={goNext} />}
      {screen === 'scan-summary' && <ScanSummary onExplore={goNext} />}
      {screen === 'system-map' && (
        <AtlasScreen
          activeView="system-map"
          selected="project"
          insightsCollapsed={insightsCollapsed}
          setInsightsCollapsed={setInsightsCollapsed}
          onSelectClass={() => setScreen('class-insights')}
          onOpenPath={() => setScreen('method-path')}
          onOpenImpact={() => setScreen('change-impact')}
        />
      )}
      {screen === 'class-insights' && (
        <AtlasScreen
          activeView="system-map"
          selected="class"
          insightsCollapsed={insightsCollapsed}
          setInsightsCollapsed={setInsightsCollapsed}
          onSelectClass={() => setScreen('class-insights')}
          onOpenPath={() => setScreen('method-path')}
          onOpenImpact={() => setScreen('change-impact')}
        />
      )}
      {screen === 'method-path' && (
        <AtlasScreen
          activeView="method-paths"
          selected="path"
          insightsCollapsed={insightsCollapsed}
          setInsightsCollapsed={setInsightsCollapsed}
          onSelectClass={() => setScreen('class-insights')}
          onOpenPath={() => setScreen('method-path')}
          onOpenImpact={() => setScreen('change-impact')}
        />
      )}
      {screen === 'change-impact' && (
        <AtlasScreen
          activeView="change-impact"
          selected="impact"
          insightsCollapsed={insightsCollapsed}
          setInsightsCollapsed={setInsightsCollapsed}
          onSelectClass={() => setScreen('class-insights')}
          onOpenPath={() => setScreen('method-path')}
          onOpenImpact={() => setScreen('change-impact')}
        />
      )}
    </main>
  );
}

function TopBar({ screen, setScreen }: { screen: Screen; setScreen: (screen: Screen) => void }) {
  return (
    <header className="top-bar">
      <div>
        <strong>ArchAtlas</strong>
        <span className="muted"> / {fakeData.repository.name}</span>
      </div>
      <nav className="flow-nav" aria-label="Prototype flow">
        {screens.map((item) => (
          <button
            key={item.id}
            className={screen === item.id ? 'active' : ''}
            onClick={() => setScreen(item.id)}
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
  selected,
  insightsCollapsed,
  setInsightsCollapsed,
  onSelectClass,
  onOpenPath,
  onOpenImpact,
}: {
  activeView: string;
  selected: 'project' | 'class' | 'path' | 'impact';
  insightsCollapsed: boolean;
  setInsightsCollapsed: (collapsed: boolean) => void;
  onSelectClass: () => void;
  onOpenPath: () => void;
  onOpenImpact: () => void;
}) {
  return (
    <section className={`atlas-layout ${insightsCollapsed ? 'insights-collapsed' : ''}`}>
      <aside className="explorer-panel">
        <Explorer activeView={activeView} onOpenPath={onOpenPath} onOpenImpact={onOpenImpact} />
      </aside>
      <section className="software-atlas">
        <AtlasMap selected={selected} onSelectClass={onSelectClass} onOpenPath={onOpenPath} />
      </section>
      <aside className="insights-panel">
        <button className="collapse-button" onClick={() => setInsightsCollapsed(!insightsCollapsed)}>
          {insightsCollapsed ? '>' : '<'}
        </button>
        {!insightsCollapsed && <Insights selected={selected} onOpenPath={onOpenPath} onOpenImpact={onOpenImpact} />}
      </aside>
    </section>
  );
}

function Explorer({ activeView, onOpenPath, onOpenImpact }: { activeView: string; onOpenPath: () => void; onOpenImpact: () => void }) {
  return (
    <div>
      <PanelTitle title="Explorer" subtitle="Views first" />
      <h3>Views</h3>
      <button className={`nav-row ${activeView === 'system-map' ? 'active' : ''}`}>System Map</button>
      <button className={`nav-row ${activeView === 'method-paths' ? 'active' : ''}`} onClick={onOpenPath}>Method Paths</button>
      <button className="nav-row">Rules</button>
      <button className={`nav-row ${activeView === 'change-impact' ? 'active' : ''}`} onClick={onOpenImpact}>Change Impact</button>

      <h3>Projects</h3>
      {fakeData.projects.map((project) => (
        <button key={project.id} className={`nav-row ${project.id === selectedProject.id ? 'selected' : ''}`}>
          {project.name.replace('OrderFlow.', '')}
        </button>
      ))}

      <h3>Application</h3>
      {fakeData.classes
        .filter((item) => item.projectId === 'project-application')
        .map((item) => (
          <button key={item.id} className={`nav-row ${item.id === selectedClass.id ? 'selected' : ''}`}>
            {item.name}
          </button>
        ))}
    </div>
  );
}

function AtlasMap({ selected, onSelectClass, onOpenPath }: { selected: string; onSelectClass: () => void; onOpenPath: () => void }) {
  const nodes = fakeData.graph.nodes;

  return (
    <div className="map-surface">
      <div className="map-header">
        <div>
          <p className="eyebrow">Software Atlas</p>
          <h2>{selected === 'impact' ? 'Change Impact' : selected === 'path' ? 'Order Import Flow' : 'System Map'}</h2>
        </div>
        <div className="legend">
          <span>● normal</span>
          <span>◆ changed</span>
          <span>⚠ warning</span>
        </div>
      </div>

      <div className="graph-canvas">
        {nodes.map((node) => (
          <button
            key={node.id}
            className={`graph-node level-${node.level} ${node.isChanged ? 'changed' : ''} ${selected === 'project' && node.id === selectedProject.id ? 'selected' : ''}`}
            onClick={node.id === 'project-application' ? onSelectClass : undefined}
          >
            <span>{node.isChanged ? '◆' : '●'}</span>
            {node.label}
          </button>
        ))}
        <div className="graph-line line-api-app" />
        <div className="graph-line line-app-domain" />
        <div className="graph-line line-app-infra" />
        <div className="graph-line line-app-msg warning-line" />
        <div className="graph-line line-infra-sql" />
        <div className="graph-line line-msg-bus warning-line" />
      </div>

      <div className="path-strip">
        {methodPath.steps.map((step) => (
          <button key={step.methodId} className={step.isChanged ? 'changed-step' : ''} onClick={onOpenPath}>
            {step.order}. {step.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Insights({ selected, onOpenPath, onOpenImpact }: { selected: 'project' | 'class' | 'path' | 'impact'; onOpenPath: () => void; onOpenImpact: () => void }) {
  if (selected === 'class') {
    return <ClassInsights onOpenPath={onOpenPath} onOpenImpact={onOpenImpact} />;
  }

  if (selected === 'path') {
    return <MethodPathInsights onOpenImpact={onOpenImpact} />;
  }

  if (selected === 'impact') {
    return <ChangeImpactInsights />;
  }

  return <ProjectInsights onOpenPath={onOpenPath} onOpenImpact={onOpenImpact} />;
}

function ProjectInsights({ onOpenPath, onOpenImpact }: { onOpenPath: () => void; onOpenImpact: () => void }) {
  return (
    <div>
      <PanelTitle title="Application" subtitle="Selected project" />
      <InsightSection title="Purpose" evidence={selectedProject.evidence}>{selectedProject.description}</InsightSection>
      <InsightSection title="Used by" evidence="Derived from graph">OrderFlow.Api</InsightSection>
      <InsightSection title="Depends on" evidence="Verified from code">Domain, Infrastructure, Messaging</InsightSection>
      <InsightSection title="Source" evidence="Verified from code">{selectedProject.sourceLocation.path}</InsightSection>
      <button className="secondary-button" onClick={onOpenPath}>View Order Import Flow</button>
      <button className="secondary-button" onClick={onOpenImpact}>View Change Impact</button>
    </div>
  );
}

function ClassInsights({ onOpenPath, onOpenImpact }: { onOpenPath: () => void; onOpenImpact: () => void }) {
  return (
    <div>
      <PanelTitle title={selectedClass.name} subtitle="Selected class" />
      <InsightSection title="Purpose" evidence={selectedClass.purpose.evidence}>{selectedClass.purpose.text}</InsightSection>
      <InsightSection title="Part of" evidence={selectedClass.role.evidence}>{selectedClass.role.text}</InsightSection>
      <InsightSection title="Calls" evidence="Verified from code">
        {selectedClass.calls.map((id) => fakeData.classes.find((item) => item.id === id)?.name).filter(Boolean).join(', ')}
      </InsightSection>
      <InsightSection title="Source" evidence="Verified from code">
        {selectedClass.sourceLocation.path}<br />line {selectedClass.sourceLocation.line}
      </InsightSection>
      <button className="secondary-button">Open in editor</button>
      <button className="secondary-button">Copy path</button>
      <button className="secondary-button" onClick={onOpenPath}>View Method Path</button>
      <button className="secondary-button" onClick={onOpenImpact}>View Change Impact</button>
    </div>
  );
}

function MethodPathInsights({ onOpenImpact }: { onOpenImpact: () => void }) {
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
      <button className="secondary-button" onClick={onOpenImpact}>View Change Impact</button>
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
