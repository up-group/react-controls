export interface UpVerticalTimelineProps {
    /** To provide title */
    title: string;
    /** To provide the events to be represented graphically */
    timeline: {
        status: string;
        date?: string;
        isAchieved: boolean
    }[];
};