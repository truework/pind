import * as React from "react";
import { configure, mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import { Pin } from './index';

configure({ adapter: new Adapter() });

function Component() {
  const [pinned, setPinned] = React.useState(false);
  const ref = React.createRef<HTMLDivElement>();

  return (
    <>
      <div ref={ref} />

      <button onClick={() => setPinned(!pinned)} />

      <Pin to={ref} at="bottom" pinned={pinned}>
        hello
      </Pin>
    </>
  );
}

it('works', () => {
  const wrapper = mount(<Component />);

  expect(wrapper.text()).not.toContain('hello');

  wrapper.find('button').simulate('click');
  wrapper.update();

  expect(wrapper.text()).toContain('hello');
});
