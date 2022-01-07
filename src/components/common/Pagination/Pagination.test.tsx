import TestRenderer from "react-test-renderer";
import {Pagination} from "./Pagination";

describe("Pagination component tests", () => {
    test("pages count is 11 but should showed only 10", () => {
        //@ts-ignore
        const component = TestRenderer.create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let li = root.findAllByType("li");
        expect(li.length).toBe(13);//include prev, next
    });

    test("if pages count is more then 10 button next should be present", () => {
        //@ts-ignore
        const component = TestRenderer.create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let spans = root.findAllByType("button");
        expect(spans.length).toBe(1);
    });
});