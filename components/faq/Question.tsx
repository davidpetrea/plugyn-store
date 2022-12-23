"use client";
import { Disclosure, Transition } from "@/common/headless";
import { ArrowIcon } from "@/svg/SvgComponents";
const Question = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="my-2 w-full lg:max-w-xl">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex items-center justify-between font-medium text-left border border-gold-soft rounded-md p-2 w-full transition duration-150 ease-linear ${
                open
                  ? "bg-gold-soft text-black bg-opacity-100 rounded-b-none"
                  : "bg-black bg-opacity-20 hover:bg-opacity-70"
              }`}
            >
              <div> {title}</div>
              <ArrowIcon className={`${!open ? "rotate-180" : null}`} />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="p-2 text-sm font-medium border border-gold-soft rounded-b-md">
                {content}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Question;
