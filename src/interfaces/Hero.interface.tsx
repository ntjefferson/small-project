export default interface Hero {
    id: number,
    name: string,
    power: string,
    powerLevel: number,
    description?: string,
    selected: boolean,
    deleteHero?(event:React.MouseEvent<HTMLElement>):void,
    selectHero?(event:React.MouseEvent<HTMLElement>):void
};