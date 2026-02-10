import ScopeCanvas from './blueprint/ScopeCanvas';
import EpicsPillars from './blueprint/EpicsPillars';
import UserRoles from './blueprint/UserRoles';
import BacklogBoard from './blueprint/BacklogBoard';
import RiskMatrix from './blueprint/RiskMatrix';
import ProjectTimeline from './blueprint/ProjectTimeline';

export default function BlueprintExtras({ visible }: { visible: boolean }) {
  return (
    <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-12">
      <ScopeCanvas visible={visible} />
      <EpicsPillars visible={visible} />
      <UserRoles visible={visible} />
      <BacklogBoard visible={visible} />
      <RiskMatrix visible={visible} />
      <ProjectTimeline visible={visible} />
    </div>
  );
}
