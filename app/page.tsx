'use client'
import Image from 'next/image'
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Card } from 'flowbite-react';
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { Alert } from 'flowbite-react';





const navbarTheme: CustomFlowbiteTheme['navbar'] = {
  collapse: {
    "base": "w-full md:block md:w-auto",
    "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  toggle: {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    "icon": "h-6 w-6 shrink-0"
  },
  link: {
    "base": "block py-2 pr-4 pl-3 md:p-0 font-extralight text-base",
    "active": {
      "on": "bg-violet-900 text-white dark:text-white md:bg-transparent md:text-violet-900",
      "off": "border-b border-gray-100  text-white hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-violet-1000 md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
};

function PortfolioNav() {
  const [openModal, setOpenModal] = useState(false);


  return (
    <Navbar fluid rounded className='bg-transparent' theme={navbarTheme}>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">Portfolio</NavbarLink>
        <NavbarLink href="https://drive.google.com/file/d/1QxHEB6lnpUvCvoaC3ft4JmOKj4L3upgj/view?usp=sharing">Resume</NavbarLink>
        <NavbarLink href="#" onClick={() => setOpenModal(true)}>Contact</NavbarLink>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Contact</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Phone Number: +1 (604) 862 9137<br />
                Email: a2alhama@uwaterloo.ca
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </NavbarCollapse>
    </Navbar>
  );
}

type CardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

function PortfolioCard(props: CardProps) {
  return (
    <Card
      className="w-10/12 lg:w-1/3 mb-4 lg:mb-0"
      imgAlt={props.imageAlt}
      imgSrc={props.imageSrc}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
    </Card>
  );
}


function PortfolioFooter() {
  return (
    <Footer container className="rounded-none bg-transparent">
      <div className="w-full p-5">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-16">
            <div>
              <FooterTitle title="Ali Al Hamadani" />
              <div className="flex justify-center mb-3 sm:justify-start">
                <a href="https://www.linkedin.com/in/ali-al-hamadani-37a4b41b3/"><img src="/linkedin.svg" className="h-4 mr-5 sm:h-4" alt="LinkedIn Logo" /></a>
                <a href="https://github.com/ratcht"><img src="/github.svg" className="h-4 sm:h-4" alt="GitHub Logo" /></a>
              </div>
            </div>
            <div>
              <FooterLinkGroup col>
                <FooterLink href="https://drive.google.com/file/d/1QxHEB6lnpUvCvoaC3ft4JmOKj4L3upgj/view?usp=sharing">Resume</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}


import { HiInformationCircle } from 'react-icons/hi';


export default function Home() {
  const [openModal, setOpenModal] = useState(true);
  const [alertState, setAlertState] = useState("");

  return (


    <main>
      <Alert color="warning" icon={HiInformationCircle} onDismiss={() => setAlertState("hidden")} className={alertState}>
        <span className="font-medium">Alert!</span> I'm still finishing up this site, but I've deployed it anyways since it contains the links to my GitHub, LinkedIn and Resume :) Nevertheless, feel free to take a look!
      </Alert>
      <div className="static p-5">

        <section id="main" className="xl:h-screen">
          <div className="w-screen absolute left-0 top-1/2 collapse sm:visible xl:top-56 2xl:top-44 -z-50">
            <img src="/backgroundline.svg" alt="Background Line" style={{width: "100%"}} />
          </div>

          <div className="flex justify-end">
            <PortfolioNav/>
          </div>
          <div className="px-8 py-5 sm:px-36 sm:py-10">
            <div className="xl:grid xl:grid-cols-3">
              <div className="col-span-2">
                <div className="flex justify-center mb-3 sm:justify-start pt-10">
                  <a href="https://www.linkedin.com/in/ali-al-hamadani-37a4b41b3/"><img src="/linkedin.svg" className="h-6 mr-5 sm:h-7" alt="LinkedIn Logo" /></a>
                  <a href="https://github.com/ratcht"><img src="/github.svg" className="h-6 sm:h-7" alt="GitHub Logo" /></a>
                </div>
                <div className="flex justify-center text-center mb-3 sm:justify-start sm:text-left" >
                  <h1 className='text-6xl font-semibold sm:text-7xl'>Hi, I'm <span style={{ color: '#D767FF' }}>Ali</span></h1>
                </div>
                <div className="flex justify-center text-center sm:justify-start sm:text-left">
                  <h3 className='text-3xl font-extralight sm:text-4xl z-10'>I <span style={{ color: '#D767FF' }} className='font-medium'>build</span> in the AI/ML space</h3>
                </div>
              </div>

              <div className="relative justify-center flex mt-12 xl:mt-0 xl:justify-end">
                <img src="aliicon.png" className="size-60 rounded-full" alt="Ali" />
              </div>
            </div>
            
            <div className="mt-10 xl:mt-20">
              <p className="text-xl font-extralight text-center sm:text-left">I'm a student at the <span className='font-medium'>University of Waterloo</span> studying <span className='font-medium'>Computer Engineering & Mathematics</span>. I specialize in developing <span className='font-medium'>AI-powered solutions</span> for businesses and individuals. Currently, I'm exploring <span className='font-medium'>TinyML</span> and <span className='font-medium'>AI within embedded systems</span>. You can find some cool projects I've worked (and am working) on <a href="#projects" className="text-blue-400 underline font-medium">here</a> 😊</p>
            </div>

            <div className="flex justify-center mt-56">
              <a href="#experience"><img src="/arrowdown.svg" className="" alt="Arrow Down" /></a>
            </div>

          </div>
        </section>

        <section id="experience">
          <div className="px-8 py-5 sm:px-36 sm:py-10">
            <h2 className="text-xl font-medium mb-5">Recent Experience</h2>
            <div className="justify-center lg:flex lg:justify-start lg:gap-4 lg:mb-4">
              <PortfolioCard title="Test" description="test" />
              <PortfolioCard title="Test" description="test" />
            </div>
            <div className="lg:flex lg:gap-4">
              <PortfolioCard title="Test" description="test" />
            </div>
          </div>
        </section>

        <section id="projects" className="mt-10">
          <div className="px-8 py-5 sm:px-36 sm:py-10">
            <h2 className="text-xl font-medium mb-5">Featured Projects</h2>
            <div className="justify-center lg:flex lg:justify-start lg:gap-4 lg:mb-4">
              <PortfolioCard title="Test" description="test" />
              <PortfolioCard title="Test" description="test" />
            </div>
            <div className="lg:flex lg:gap-4">
              <PortfolioCard title="Test" description="test" />
              <PortfolioCard title="Test" description="test" />
            </div>
          </div>
        </section>

        <section id="limerick">



        </section>

      </div>

      <section id="footer" className="mt-24">
        <PortfolioFooter />
      </section>
    </main>
  )
}
