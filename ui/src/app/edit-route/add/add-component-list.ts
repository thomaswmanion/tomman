export const addComponentList: IAddComponent[] = [
    {
        id: 'ng-mat-router-button',
        label: 'Add Router Button',
        properties: [{
            id: 'identifier',
            label: 'Identifier (Dasherized)',
            type: 'text',
            required: true
        }, {
            id: 'link',
            label: 'Route Link',
            type: 'text',
            required: true
        }]
    },
];

export interface IAddComponent {
    id: string;
    label: string;
    properties: IAddComponentProperty[];
}

export interface IAddComponentProperty {
    id: string;
    label: string;
    type: 'text';
    required: boolean;
}
