import { MElement } from "../../../model/MElement";

export class RootElement extends MElement {
    public constructor(){
        super(
            "rectangle3.png",
            "root",
            100,
            35,
            "strokeWidth=3",
            "Root Feature"
        );
    }
}