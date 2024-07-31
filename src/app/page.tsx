"use client";
import Image from "next/image";
import styles from "./page.module.css";
import IconSuccess from "../../public/assets/images/icon-success.svg";
import IconList from "../../public/assets/images/icon-list.svg";
import DesktopIllustration from "../../public/assets/images/illustration-sign-up-desktop.svg";
import MobileIllustration from "../../public/assets/images/illustration-sign-up-mobile.svg";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit");
    e.preventDefault();
    setError(false);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log("test", emailPattern.test(email));
    setError(!emailPattern.test(email));
  };

  console.log("error", error);

  return (
    <main className={styles.main}>
      {/* <div className="custom-container"> */}
      <div className="signup-card">
        <div className="card-content ">
          <h1 className="title">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <Image src={IconList} alt="IconList" />
              <p>Product discovery and building what matters</p>
            </li>
            <li>
              <Image src={IconList} alt="IconList" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li>
              <Image src={IconList} alt="IconList" />
              <p>And much more</p>
            </li>
          </ul>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <div className="">
                <label htmlFor="exampleInputEmail1">Email address</label>
                {error && (
                  <div className="text-danger">
                    <small>Valid email required</small>
                  </div>
                )}
              </div>

              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="email@company.com"
                onChange={(e) => setEmail(e.target.value)}
                formNoValidate={true}
              />
            </div>
            <button type="submit" className="sub-btn">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div>
          <Image
            src={isMobile ? MobileIllustration : DesktopIllustration}
            alt="illustration"
            className="card-img"
          />
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
