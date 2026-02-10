import DiscoveryFramework from './mission/DiscoveryFramework';
import RaciMatrix from './mission/RaciMatrix';
import CollaborationWorkflows from './mission/CollaborationWorkflows';
import WeeklyRhythm from './mission/WeeklyRhythm';
import HipaaCompliance from './mission/HipaaCompliance';
import TechStack from './mission/TechStack';
import DecisionFramework from './mission/DecisionFramework';

export default function MissionControlExtras({ visible }: { visible: boolean }) {
  return (
    <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-12">
      <DiscoveryFramework visible={visible} />
      <RaciMatrix visible={visible} />
      <CollaborationWorkflows visible={visible} />
      <WeeklyRhythm visible={visible} />
      <HipaaCompliance visible={visible} />
      <TechStack visible={visible} />
      <DecisionFramework visible={visible} />
    </div>
  );
}
