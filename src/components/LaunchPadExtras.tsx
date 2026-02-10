import TestingStrategy from './launch/TestingStrategy';
import TestingPhases from './launch/TestingPhases';
import UATSection from './launch/UATSection';
import GTMRollout from './launch/GTMRollout';

export default function LaunchPadExtras({ visible }: { visible: boolean }) {
  return (
    <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-12">
      <TestingStrategy visible={visible} />
      <TestingPhases visible={visible} />
      <UATSection visible={visible} />
      <GTMRollout visible={visible} />
    </div>
  );
}
