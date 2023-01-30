import '../styles/SectionScroller.css';
import { useState, useEffect } from 'react';
import useScrollPosition from '../hooks/useScrollPosition';
import { ReactComponent as HomeIcon } from '../assets/home.svg';
import { ReactComponent as PreviousIcon } from '../assets/previous.svg';
import { ReactComponent as UpIcon } from '../assets/up.svg';
import { ReactComponent as DownIcon } from '../assets/down.svg';
import { ReactComponent as NextIcon } from '../assets/next.svg';
import { ReactComponent as BaseIcon } from '../assets/base.svg';

function SectionScroller() {
  const [mainElementHeight, setMainElementHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isAtHomeSection, setIsAtHomeSection] = useState(true);
  const [isAtBaseSection, setIsAtBaseSection] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const scrollPosition = useScrollPosition();
  const scrollPositionAtBottom = mainElementHeight - windowHeight - 1;

  useEffect(() => {
    const mainElement = document.getElementsByTagName('main').item(0);
    const newMainElementHeight = mainElement.clientHeight;
    setMainElementHeight(newMainElementHeight);

    if (!mainElementHeight) return;

    const newWindowHeight = window.innerHeight;
    setWindowHeight(newWindowHeight);

    const sections = getSections();
    const newIsAtHomeSection = getIsAtHomeSection(sections);
    const newIsAtBaseSection = getIsAtBaseSection(sections);
    setIsAtHomeSection(newIsAtHomeSection);
    setIsAtBaseSection(newIsAtBaseSection);

    const newIsAtBottom = getIsAtBottom();
    setIsAtBottom(newIsAtBottom);
  }, [scrollPosition]);

  const getIsAtHomeSection = () => {
    const newIsAtHomeSection = scrollPosition === 0;
    return newIsAtHomeSection;
  };

  const getIsAtBaseSection = sections => {
    const sectionsHeight = sections.reduce((accumulated, section) => {
      return accumulated + section.height;
    }, 0);

    const scrollPositionInt = Math.ceil(scrollPosition);
    const baseSection = getBaseSection(sections);
    const sectionsHeightTop = sectionsHeight - baseSection.height;

    const newIsAtBaseSectionTop = scrollPositionInt >= sectionsHeightTop;
    const newIsAtBottom = getIsAtBottom();

    const newIsAtBaseSection = newIsAtBaseSectionTop || newIsAtBottom;
    return newIsAtBaseSection;
  };

  const getIsAtBottom = () => {
    const scrollPositionInt = Math.ceil(scrollPosition);
    const newIsAtBottom = scrollPositionInt >= scrollPositionAtBottom;
    return newIsAtBottom;
  };

  const getSections = () => {
    const sections = [];
    const sectionElements = document.getElementsByTagName('section');

    // Maybe replace this with ID to make sure it'll always be unique?
    for (const sectionElement of sectionElements) sections.push({
      name: sectionElement.className,
      height: sectionElement.clientHeight
    });

    return sections;
  };

  const getHomeSection = sections => {
    return sections[0];
  };

  const getBaseSection = sections => {
    return sections[sections.length - 1];
  };

  const getNextSection = sections => {
    let nextSection, accumulated = 0;
    const scrollPositionInt = Math.ceil(scrollPosition);

    for (let index in sections) {
      index = parseInt(index);
      accumulated += sections[index].height;

      if (scrollPositionInt < accumulated) {
        nextSection = sections[index + 1];
        break;
      }
    }

    nextSection ||= getHomeSection(sections);
    return nextSection;
  };

  const getPreviousSection = sections => {
    let previousSection, accumulated = 0;
    const scrollPositionInt = Math.floor(scrollPosition);

    for (let index in sections) {
      index = parseInt(index);

      if (scrollPositionInt <= accumulated) {
        previousSection = sections[index - 1];
        break;
      }

      accumulated += sections[index].height;
    }

    previousSection ||= getBaseSection(sections);
    return previousSection;
  };

  const scrollSectionIntoView = section => {
    const sectionElement = document
      .getElementsByClassName(section.name).item(0);

    sectionElement.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollUp = () => {
    const newScrollPosition = scrollPosition - 200;
    window.scrollTo(0, newScrollPosition);
  };

  const scrollDown = () => {
    const newScrollPosition = scrollPosition + 200;
    window.scrollTo(0, newScrollPosition);
  };

  const handleClick = type => {
    const sections = getSections();
    let section;

    switch (type) {
      case 'UP': return scrollUp();
      case 'DOWN': return scrollDown();
      case 'NEXT': section = getNextSection(sections); break;
      case 'PREVIOUS': section = getPreviousSection(sections); break;
      case 'HOME': section = getHomeSection(sections); break;
      case 'BASE': section = getBaseSection(sections); break;
    }

    scrollSectionIntoView(section);
  };

  return <div className='section-scroller'>
    <div>
      <button disabled={isAtHomeSection} onClick={() => handleClick('HOME')}><HomeIcon /></button>
      <button disabled={isAtHomeSection} onClick={() => handleClick('PREVIOUS')}><PreviousIcon /></button>
      <button disabled={isAtHomeSection} onClick={() => handleClick('UP')}><UpIcon /></button>
    </div>
    <progress value={scrollPosition} max={scrollPositionAtBottom}></progress>
    <div>
      <button disabled={isAtBaseSection} onClick={() => handleClick('BASE')}><BaseIcon /></button>
      <button disabled={isAtBaseSection} onClick={() => handleClick('NEXT')}><NextIcon /></button>
      <button disabled={isAtBottom} onClick={() => handleClick('DOWN')}><DownIcon /></button>
    </div>
  </div>
}

export default SectionScroller;