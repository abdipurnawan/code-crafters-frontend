import HomePage from '@/src/components/pages/home-page';
import MainTemplate from '@/src/components/templates/main-template';
import ServiceModel from '@/src/models/service-model';
import SettingModel from '@/src/models/setting-model';
import TestimonyModel from '@/src/models/testimony-model';
import { servicesDataState } from '@/src/recoils/service-atom';
import { settingsDataState } from '@/src/recoils/setting-atom';
import { testimoniesDataState } from '@/src/recoils/testimony-atom';
import ServiceRepository from '@/src/repositories/service-repository';
import SettingRepository from '@/src/repositories/setting-repository';
import TestimonyRepository from '@/src/repositories/testimony-repository';
import { useRecoilState, useSetRecoilState } from 'recoil';

interface HomeProps {
  services: ServiceModel[];
  testimonies: TestimonyModel[];
  settings: SettingModel;
}

export default function Home(props: HomeProps) {
  // set services data to state
  const setServices = useSetRecoilState<ServiceModel[]>(servicesDataState);
  if (props.services.length > 0) {
    setServices(props.services);
  }

  // set testimonies data to state
  const setTestimonies = useSetRecoilState<TestimonyModel[]>(testimoniesDataState);
  if (props.testimonies.length > 0) {
    setTestimonies(props.testimonies);
  }

  // set settings data to state
  const setSettings = useSetRecoilState<SettingModel>(settingsDataState);
  if (props.settings) {
    setSettings(props.settings);
  }

  return (
    <MainTemplate>
      <HomePage />
    </MainTemplate>
  );
}

export const getStaticProps = async () => {
  // get services
  const serviceRepository = new ServiceRepository();
  const servicesData = await serviceRepository.getServices();

  // get testimonials
  const testimonialRepository = new TestimonyRepository();
  const testimonialData = await testimonialRepository.getTestimonies();

  // get settings
  const settingRepository = new SettingRepository();
  const settingData = await settingRepository.getSettings();

  return {
    props: {
      services: servicesData?.data || [],
      testimonies: testimonialData?.data || [],
      settings: settingData?.data || null
    },
    revalidate: 600
  };
};
