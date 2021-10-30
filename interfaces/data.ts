export interface IGenericComponent {
    id: string;
    label: string;
}

export interface Category extends IGenericComponent {
    icon: string | null;
}
