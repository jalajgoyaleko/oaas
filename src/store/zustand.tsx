import create from 'zustand';

type Zustand = {
  currentStep: number;
  completed: boolean;
  status: string;
  uploadedImage: number;
  panStatus: number;
  fetchData: boolean;
  finish: boolean;
  panStatusResult: string;
  imge: any | null;
  cameraStatus: boolean;
  manageVeriyStep: number;
  selectedFile: any;
  setSelectedFile: (input: any) => void;
  setImg: (input: any) => void;
  setPanStatusResult: (input: string) => void;
  setFinish: (input: boolean) => void;
  setFetchData: (input: boolean) => void;
  setPanStatus: (input: number) => void;
  setUploadedImage: (input: number) => void;
  setStatus: (input: string) => void;
  setCompleted: (input: boolean) => void;
  setCurrentStep: (input: number) => void;
  setCameraStatus: (input: boolean) => void;
  setManageVeriyStep: () => void;
  setManageVeriyStepback: () => void;
  setManageVeriyStepinital: () => void;

  getLocation: boolean;
  setGetlocation: (input: boolean) => void;

  preview: '';
  setPreview: (input: any) => void;

  panVerificationfailed: number;
  setPanVerificationfailed: (input: number) => void;
  setPanVerificationdone: (input: number) => void;

  isYourPan: boolean;
  setIsYourPan: (input: boolean) => void;
};

export const useStore = create<Zustand>((set) => ({
  getLocation: false,
  setGetlocation: (input: boolean) => set(() => ({ getLocation: input })),
  selectedFile: '',
  setSelectedFile: (input: any) => set(() => ({ selectedFile: input })),

  panVerificationfailed: 0,
  setPanVerificationfailed: (input: number) => set(() => ({ panVerificationfailed: input })),
  setPanVerificationdone: (input: number) => set(() => ({ panVerificationfailed: input })),

  isYourPan: false,
  setIsYourPan: (input: boolean) => set(() => ({ isYourPan: input })),

  preview: '',
  setPreview: (input: any) => set(() => ({ preview: input })),
  currentStep: 0,
  completed: false,
  status: 'In Progress',
  uploadedImage: 0,
  panStatus: 0,
  fetchData: false,
  finish: false,
  panStatusResult: 'Good Match',
  imge: null,
  setImg: (input: any) => set(() => ({ imge: input })),
  setPanStatusResult: (input: string) => set(() => ({ panStatusResult: input })),
  setFinish: (input: boolean) => set(() => ({ finish: input })),
  setFetchData: (input: boolean) => set(() => ({ fetchData: input })),
  setPanStatus: (input: number) => set(() => ({ panStatus: input })),
  setUploadedImage: (input: number) => set(() => ({ uploadedImage: input })),
  setStatus: (input: string) => set(() => ({ status: input })),
  setCompleted: (input: boolean) => set(() => ({ completed: input })),
  setCurrentStep: (input: number) => set(() => ({ currentStep: input })),
  cameraStatus: false,
  manageVeriyStep: 0,
  setManageVeriyStep: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep + 1 })),
  setManageVeriyStepback: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep - 1 })),
  setManageVeriyStepinital: () => set((state) => ({ manageVeriyStep: state.manageVeriyStep })),
  setCameraStatus: (input: boolean) => set(() => ({ cameraStatus: input }))
}));
