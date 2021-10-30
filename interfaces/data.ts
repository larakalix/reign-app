export interface IGenericComponent {
    id: string;
    label: string;
}

export interface Category extends IGenericComponent {
    icon: string | null;
}

export interface Tab extends IGenericComponent {
    panel: TabPanel;
}

export enum TabPanel { News, Favs }
