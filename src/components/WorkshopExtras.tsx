import StoryHeader from './workshop/StoryHeader';
import AcceptanceCriteria from './workshop/AcceptanceCriteria';
import EdgeCases from './workshop/EdgeCases';
import TechnicalNotes from './workshop/TechnicalNotes';
import Wireframes from './workshop/Wireframes';
import DefinitionOfDone from './workshop/DefinitionOfDone';
import HandoffAndQuestions from './workshop/HandoffAndQuestions';
import SpecPhilosophy from './workshop/SpecPhilosophy';

export default function WorkshopExtras({ visible }: { visible: boolean }) {
  return (
    <div className="mt-12 space-y-10">
      {/* Section 1: Full User Story Spec */}
      <div>
        <StoryHeader visible={visible} />

        {/* Nested spec sections inside the story */}
        <div className="ml-0 mt-6 pl-4 border-l-2 border-amber-200 space-y-8">
          <AcceptanceCriteria visible={visible} />
          <EdgeCases visible={visible} />
          <TechnicalNotes visible={visible} />
          <Wireframes visible={visible} />
          <DefinitionOfDone visible={visible} />
          <HandoffAndQuestions visible={visible} />
        </div>
      </div>

      {/* Section 2: Spec Philosophy */}
      <SpecPhilosophy visible={visible} />
    </div>
  );
}
