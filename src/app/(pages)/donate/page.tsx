import SubBanner from "@/components/ui/SubBanner";
import Link from "next/link";
import { BiLogoPaypal, BiLogoVenmo } from "react-icons/bi";
import { AiFillCreditCard } from "react-icons/ai";
import { FaGooglePay, FaApplePay } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <SubBanner
        title='Donate'
        subtitle='Help support Webber Lights by donating!'
      />

      <div className='mb-40 mt-10 flex flex-col mx-auto w-80 text-center'>
        <Link
          className='bg-blue-500 p-2 rounded-xl m-4'
          href='https://donate.stripe.com/14keXI6D80HncPm145'
        >
          <AiFillCreditCard className='h-6 w-6 mr-2 inline' />
          Donate Using Card
        </Link>
        <Link
          className='bg-[#008CFF] p-2 rounded-xl m-4'
          href='https://venmo.com/u/Lucas-Webber'
        >
          <BiLogoVenmo className='h-6 w-6 mr-2 inline' /> Donate Using Venmo
        </Link>
        <Link
          className='bg-[#169bd7] p-2 rounded-xl m-4'
          href='https://paypal.me/xcraftman52?country.x=US&locale.x=en_US'
        >
          <BiLogoPaypal className='h-6 w-6 mr-2 inline' /> Donate Using Paypal
        </Link>
        <Link
          className='bg-black p-2 rounded-xl m-4'
          href='https://donate.stripe.com/14keXI6D80HncPm145'
        >
          <FaGooglePay className='h-8 w-8 mr-2 inline' /> Donate Using Google
          Pay
        </Link>
        <Link
          className='bg-black p-2 rounded-xl m-4'
          href='https://donate.stripe.com/14keXI6D80HncPm145'
        >
          <FaApplePay className='h-8 w-8 mr-2 inline' /> Donate Using Apple Pay
        </Link>
      </div>
    </div>
  );
}
