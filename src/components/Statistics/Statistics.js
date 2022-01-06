import {
  StatisticsSection,
  Title,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from "./Statistics.styled";

export default function Statistics({ stats, title }) {
  return (
    <StatisticsSection>
      <Title>{title}</Title>
      <StatsList>
        {stats.map((stat) => (
          <StatsItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatisticsSection>
  );
}
