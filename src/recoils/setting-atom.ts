import { atom, RecoilState } from 'recoil';
import { v4 } from 'uuid';
import SettingModel from '../models/setting-model';

const initialSettingData: SettingModel = {
  site_name: 'CodeCrafters',
  site_description:
    'CodeCrafters adalah Software House, lahir untuk mengubah ide menjadi aplikasi berkualitas, dan memanfaatkan kode untuk perubahan positif. Bersama-sama, mari ciptakan masa depan yang lebih baik melalui seni kode.',
  site_email: 'sales@codecrafters.id',
  ga_tracking_id: process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? ''
};

export const settingsDataState: RecoilState<SettingModel> = atom({
  key: `settingsData/${v4()}`,
  default: initialSettingData
});
