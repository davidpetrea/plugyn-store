import { Fragment, useState } from "react";
import { Dialog, Transition } from "@/common/headless";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { discordLink, skypeLink, epvpLink, mailLink } from "utils/contacts";
import {
  DiscordIcon,
  SkypeIcon,
  EpvpIcon,
  MailIcon,
} from "@/svg/SvgComponents";
import Image from "next/image";
const MobileNavModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Button */}
      <button onClick={openModal} className="lg:hidden">
        <Image src="/menu.svg" alt="Menu" width={32} height={32} />
      </button>
      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* Overlay transition */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-x-100"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md overflow-hidden text-left align-middle transition-all transform rounded-md shadow-xl bg-gray-900">
                  {/* Navigation links */}
                  <div className="p-4">
                    <Dialog.Title
                      as="div"
                      className="text-gold-soft flex items-center justify-between text-lg font-medium leading-6"
                    >
                      <h3>Navigate</h3>
                      <button onClick={closeModal}>X</button>
                    </Dialog.Title>
                    <div className="flex flex-col items-center gap-2 mt-2 ">
                      <NavLink href="/" title="Home" onClick={closeModal} />
                      <NavLink
                        href="/store"
                        title="Store"
                        onClick={closeModal}
                      />
                      <NavLink
                        href="/how"
                        title="How it works"
                        onClick={closeModal}
                      />
                      <NavLink
                        href="/about"
                        title="About us"
                        onClick={closeModal}
                      />
                      <NavLink href="/faq" title="FAQ" onClick={closeModal} />
                    </div>
                  </div>

                  {/* Contacts */}
                  <div className="bg-gold-soft p-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Contact us
                    </h3>
                    <div className="flex flex-col items-center gap-2 mt-2 ">
                      <ContactLink
                        href={discordLink}
                        title="PlugynStore#8189"
                        icon={<DiscordIcon />}
                      />
                      <ContactLink
                        href={skypeLink}
                        title="live:plugynStore"
                        icon={<SkypeIcon />}
                      />
                      <ContactLink
                        href={epvpLink}
                        title="ElitePvPers Profile"
                        icon={<EpvpIcon />}
                      />
                      <ContactLink
                        href={mailLink}
                        title="support@plugynstore.com"
                        icon={<MailIcon />}
                      />
                    </div>
                    <p className="text-xs font-medium text-black mt-4">
                      TIP: We will be able to reply faster if you contact us via
                      our Discord at PlugynStore#8189.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
const NavLink = ({
  href,
  title,
  onClick,
}: {
  href: string;
  title: string;
  onClick: () => void;
}): JSX.Element => {
  const path = usePathname();
  const isActive = href === path;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${
        isActive
          ? "bg-gold-soft text-black"
          : "hover:bg-gold-soft hover:text-black"
      } transition text-white ease-linear duration font-medium border border-gold-soft w-full rounded-md p-2 text-center`}
    >
      {title}
    </Link>
  );
};

const ContactLink = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon?: JSX.Element;
}): JSX.Element => {
  if (icon)
    return (
      <Link
        href={href}
        className="flex items-center w-full gap-2 p-2 px-6 font-medium text-black transition ease-linear border-2 border-black rounded-md duration hover:text-white hover:bg-black"
      >
        {icon}
        <div>{title}</div>
      </Link>
    );

  return (
    <Link
      href={href}
      className="transition ease-linear hover:text-white duration"
    >
      {title}
    </Link>
  );
};

export default MobileNavModal;
