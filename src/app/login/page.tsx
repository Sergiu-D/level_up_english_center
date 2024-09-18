"use client"
import {useState, useEffect} from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useRouter } from 'next/navigation';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export default function Login() {
  const [value, setValue] = useState<string | null>(null);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const maxLength = 5;

    const handleSubmit = async (value: string) => {
      setIsLoading(true);
    try {
      const response = await fetch('/api/validate-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: value }),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/');
      } else {
        setResponse('Invalid code, please try again.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred. Please try again later.');
      setIsLoading(false);
    }
  };

  const isValue = !value ? "" : value

  useEffect(() => {
    if (isValue?.length === maxLength) {
      handleSubmit(isValue);
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-7 h-[100vh] items-center justify-center">
      <div className="flex flex-col relative">
        <h1 className="font-semibold text-2xl mb-5">Enter code:</h1>
        <div className="">
          <InputOTP
            maxLength={maxLength}
            onChange={(ev: string) => setValue(ev)}
            pattern={REGEXP_ONLY_DIGITS}
            className="gap-2"
            disabled={isLoading}
          >
            <InputOTPGroup>
              <InputOTPSlot
                index={0}
                className="border-slate-500 w-[60px] h-[60px] text-3xl"
              />
              <InputOTPSlot
                index={1}
                className="border-slate-500 w-[60px] h-[60px] text-3xl"
              />
              <InputOTPSlot
                index={2}
                className="border-slate-500 w-[60px] h-[60px] text-3xl"
              />
              <InputOTPSlot
                index={3}
                className="border-slate-500 w-[60px] h-[60px] text-3xl"
              />
              <InputOTPSlot
                index={4}
                className="border-slate-500 w-[60px] h-[60px] text-3xl"
              />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <span className=" text-red-500 mt-2 h-[3ch]">{response}</span>
      </div>
    </div>
  );
}
