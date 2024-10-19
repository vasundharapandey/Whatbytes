import SkillTestDashboard from './SkillDash';
import { StatsProvider } from './context/StatsContext';
export default function Home() {
  return    ( <StatsProvider>
  <SkillTestDashboard />
</StatsProvider>);
}
