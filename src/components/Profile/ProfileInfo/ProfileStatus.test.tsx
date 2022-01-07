import TestRenderer from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus component", ()=> {
   test("status from props should be in the state", () => {
       //@ts-ignore
       const component = TestRenderer.create(<ProfileStatus status="it-kamasutra"/>);
       const instance = component.getInstance();
       //@ts-ignore
       expect(instance.state.status).toBe("it-kamasutra");
   });

    test("after creation span with status should be displayed", () => {
        //@ts-ignore
        const component = TestRenderer.create(<ProfileStatus status="it-kamasutra"/>);
        const root = component.root;
        let span = root?.findByType("span");

        //@ts-ignore
        expect(span.length).not.toBeNull();
    });

    test("after creation input shouldn't be displayed", () => {
        //@ts-ignore
        const component = TestRenderer.create(<ProfileStatus status="it-kamasutra"/>);
        const root = component.root;

        expect(() => {
            let input = root?.findByType("input");
        }).toThrow();
    });

    test("after creation span should contains correct status", () => {
        //@ts-ignore
        const component = TestRenderer.create(<ProfileStatus status="it-kamasutra"/>);
        const root = component.root;
        let span = root?.findByType("span");

        expect(span.children[0]).toBe("it-kamasutra");
    });

    test("input should be displayed in editMode instead of span", () => {
        //@ts-ignore
        const component = TestRenderer.create(<ProfileStatus status="it-kamasutra"/>);
        const root = component.root;
        let span = root?.findByType("span");
        span.props.onDoubleClick();
        let input = root?.findByType("input");

        expect(input.props.value).toBe("it-kamasutra");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        //@ts-ignore
        const component = TestRenderer.create(<ProfileStatus status="it-kamasutra" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        //@ts-ignore
        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1);
    });
});