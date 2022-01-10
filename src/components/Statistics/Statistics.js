import PropTypes from "prop-types";
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
      {title && <Title>{title}</Title>}
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

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
