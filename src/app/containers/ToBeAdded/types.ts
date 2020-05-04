/* --- STATE --- */
interface StoriesList {
    sprint_name: string;
    sprint_code: string; 
    active: boolean; 
    status: string; 
    date_started: string; 
    stories: { 
        story_name: string; 
        story_slug: string; 
        date_started: string; 
        date_completed: string; 
        status: string; 
        active: boolean;
    }
}

export interface Story extends StoriesList{
      name: string;
      status: string;
      active: boolean;
      time: string;

}
export interface ToBeAddedState {
    stories: Story[];
}
export type ContainerState = ToBeAddedState;
