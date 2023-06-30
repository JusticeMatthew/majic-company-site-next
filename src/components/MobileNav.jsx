import React from 'react';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { ScrollLink } from '@/components';

const MobileNav = ({ navItems }) => {
  return (
    <div className="fixed sm:hidden right-4">
      <Menu as="div" className="relative inline-block">
        <Menu.Button className="flex items-center justify-center w-14 h-14">
          <Image
            src="/images/burger-menu.svg"
            alt="menu"
            height={42}
            width={42}
          />
        </Menu.Button>
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 p-4 shadow bg-seasalt rounded-2xl">
            {({ close }) =>
              navItems.map((item, idx) => (
                <div key={idx} className="px-3 py-2">
                  <Menu.Item onClick={close}>
                    {({ active }) => (
                      <ScrollLink
                        to={item[0]}
                        offset={item[3]}
                        active="bg-primary-gradient text-seasalt"
                        className="text-xl font-semibold rounded-2xl"
                      >
                        <p>{item[1]}</p>
                      </ScrollLink>
                    )}
                  </Menu.Item>
                </div>
              ))
            }
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MobileNav;
