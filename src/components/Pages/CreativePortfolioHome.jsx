import React, { useEffect } from 'react';
import CaseStudy from '../CaseStudy';
import Cta from '../Cta';
import Div from '../Div';
import Hero3 from '../Hero/Hero3';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import Portfolio2 from '../Portfolio/Portfolio2';
import Portfolio3 from '../Portfolio/Portfolio3';
import SectionHeading from '../SectionHeading';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Spacing from '../Spacing';
import { pageTitle } from '../../helper';
import StreamlitApp from '../Portfolio/StreamlitApp';

export default function CreativePortfolioHome() {
  pageTitle('Creative Portfolio');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heroSocialLinks = [
    {
      name: 'Generate PDF',
      links: '/',
    },
    {
      name: 'In 10 Seconds',
      links: '/',
    },
  ];
  const portfolioData = [
    {
      title: 'Project report in Microsoft Word (.doc) format.',
      subtitle: '.doc',
      btnText: 'Download Word File',
      btnLink: '/portfolio/portfolio-details',
      imageUrl: '/images/porfolio35.PNG',
      category: 'Editable File',
    },
    {
      title: 'Portable Document Format (.pdf) version of the report.',
      subtitle: '.pdf',
      btnText: 'Download PDF File',
      btnLink: '/portfolio/portfolio-details',
      imageUrl: '/images/porfolio36.PNG',
      category: 'PDF File',
    },
    {
      title: 'Report that checks for any instances of plagiarism in the project report.',
      subtitle: '.pdf',
      btnText: 'Downlaod Pagiarism Report',
      btnLink: '/portfolio/portfolio-details',
      imageUrl: '/images/porfolio37.PNG',
      category: 'Plagiarism Checked',
    },
    
  ];
  return (
    <>
      {/* Start Hero Section */}
      <Hero3
        title="Tell me about <br />Your Project"
        btnLink="/StreamlitApp"  
        btnText={`Get Started`}
        src="https://pabloguineab-genpdf-streamlit-app-o4rtfm.streamlit.app/"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="./images/hero_bg_4.jpeg"
      />

      <iframe
      title="Streamlit App"
      src="https://<streamlit-app-url>"
      width="100%"
      height="800"
      />
      {/* End Hero Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="80" />
      {portfolioData.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio2
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio3
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ),
      )}
      {/* End Portfolio Section */}

      {/* Start Case Study Section */}
      <Spacing lg="45" md="10" />
      <Div className="container">
        <SectionHeading
          title="Enjoy your project!"
          subtitle="Download ZIP"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
      </Div>
      <CaseStudy
        title="The most accurate <br /> Academic Projects Generator."
        bgUrl="/images/case_study_2.jpeg"
        href="/case-study/case-study-details"
        variant="cs-style2"
      />
      <CaseStudy
        title="Based on AI writing models to generate Projects from just an Index"
        bgUrl="/images/case_study_1.jpeg"
        href="/case-study/case-study-details"
      />
      <Spacing lg="150" md="80" />
      {/* End Case Study Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg_3.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
