

interface Industry {
    id: string;
    name: string;
    subIndustries: string[];
}

interface OnboardingFormProps {
    industries: Industry[];
}

const OnboardingForm: React.FC<OnboardingFormProps> = ({ industries }) => {    
    return (
       <div>Hello</div>
    );
}

export default OnboardingForm;