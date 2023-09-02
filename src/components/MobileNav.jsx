import React from 'react';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { ScrollLink } from '@/components';

const MobileNav = ({ navItems }) => {
  return (
    <div className="fixed md:hidden right-3">
      <Menu as="div" className="relative inline-block">
        {({ open }) => (
          <>
            {open ? (
              <Menu.Button className="flex items-center justify-center w-14 h-14">
                <Image
                  src="/images/close-icon.svg"
                  alt="menu"
                  height={42}
                  width={42}
                />
              </Menu.Button>
            ) : (
              <Menu.Button className="flex items-center justify-center w-14 h-14">
                <Image
                  src="/images/burger-menu.svg"
                  alt="menu"
                  height={42}
                  width={42}
                />
              </Menu.Button>
            )}
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-40 p-4 shadow bg-seasalt rounded-2xl">
                {navItems.map((item, idx) => (
                  <Menu.Item key={idx}>
                    {({ active, close }) => (
                      <div
                        onClick={close}
                        className={`${
                          active
                            ? 'text-xl font-semibold rounded-2xl bg-primary-gradient py-2 px-3'
                            : 'text-xl font-semibold rounded-2xl py-2 px-3'
                        }`}
                      >
                        <ScrollLink
                          to={item[0]}
                          onClick={close}
                          offset={item[3]}
                          className="text-xl font-semibold rounded-2xl"
                        >
                          <p>{item[1]}</p>
                        </ScrollLink>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default MobileNav;
