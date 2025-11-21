import timelineData from "./timelineData.json";

export interface ITimelineEvent {
  year: string;
  description: string;
}

export interface ITimePeriod {
  id: number;
  period: string;
  category: string;
  events: ITimelineEvent[];
}

export interface ITimelineData {
  periods: ITimePeriod[];
}

export const getTimelineData = (): ITimelineData => {
  return timelineData;
};
