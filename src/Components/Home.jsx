import React, { useEffect, useRef } from "react";
import "./Home.css";
import vdanimate from "../assests/video2.mp4";
import vdanimate3 from "../assests/video3.mp4";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <>
      <section>
        <div style={{ textAlign: "center" }}>
          <h1>Automated Candidate Follow-ups</h1>
          <p>
            <strong>Without Kula:</strong>
            Candidates are scattered all over. Managing operations is the most
            hated part of recruitment.
          </p>
        </div>
        <div
          style={{ textAlign: "center", fontSize: "25px", marginTop: "100px" }}
        >
          <h1>Your talent pipeline isn’t a pipe dream anymore</h1>
        </div>

        <div className="services">
          <div className="service">
            <img
              src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307b6cb23f817485e754ba1_Frame%2023-p-500.png"
              alt=""
            />
            <h2>Without Kula</h2>
            <p>
              <strong>Before Kula:</strong>
              Candidates are scattered all over. Managing operations is the most
              hated part of recruitment.
            </p>
          </div>
          <div className="service">
            <img
              src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307b2fbfa9f10082210e8dd_im-p-500.png"
              alt=""
            />
            <h2>With Kula</h2>
            <p>
              <strong>After Kula:</strong>
              All candidates are in one place. Your communication is automated.
              You have reports ready for every opening. You feel confident.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div style={{ textAlign: "center", marginTop: "200px" }}>
                <h1 style={{ fontSize: "40px" }}>
                  Double the hires, half the effort
                </h1>
                <p>
                  Open conversations and nurture relationships at scale and be
                  the first choice when your ideal candidate is ready to
                  explore.
                </p>
                <button style={{ borderRadius: "10px", cursor: "pointer" }}>
                  View Kula Outreach
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="services">
          <div className="service" style={{ width: "30%" }}>
            <div style={{ padding: "40px" }}>
              <h2>
                <span className="follow">Kula Outreach</span> <br />
                Automated Candidate Follow-ups
              </h2>
              <p>
                For prospective candidates, send automated, periodic follow-ups
                and value-adds to nurture long-term relationships
              </p>
            </div>
            <div style={{ padding: "40px" }}>
              <h2>
                <span className="follow">Kula Outreach</span> <br />
                Automated Candidate Follow-ups
              </h2>
              <p>
                For prospective candidates, send automated, periodic follow-ups
                and value-adds to nurture long-term relationships
              </p>
            </div>
            <div style={{ padding: "40px" }}>
              <h2>
                <span className="follow">Kula Outreach</span> <br />
                Automated Candidate Follow-ups
              </h2>
              <p>
                For prospective candidates, send automated, periodic follow-ups
                and value-adds to nurture long-term relationships
              </p>
            </div>
          </div>
          <div className="service">
            <video
              style={{
                borderRadius: "100px",
                height: "80%",
                width: "600px",
              }}
              ref={videoRef}
              autoPlay={true}
              loop={true}
              src={vdanimate}
            ></video>
          </div>
        </div>
        <div className="container">
          <div className="section">
            <div className="row">
              <div style={{ textAlign: "center", marginTop: "200px" }}>
                <h1 style={{ fontSize: "40px" }}>
                  Turn employee's networks into your talent pipeline
                </h1>
                <p>
                  Bring all professional connections of your existing team
                  members on one platform, request referrals in a click, and get
                  an intro in another.
                </p>
                <button style={{ borderRadius: "10px", cursor: "pointer" }}>
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="service" style={{ width: "30%" }}>
            <div style={{ padding: "40px" }}>
              <h2>
                <span className="follow">Kula Outreach</span> <br />
                Automated Candidate Follow-ups
              </h2>
              <p>
                For prospective candidates, send automated, periodic follow-ups
                and value-adds to nurture long-term relationships
              </p>
            </div>
            <div style={{ padding: "40px" }}>
              <h2>
                <span className="follow">Kula Outreach</span> <br />
                Automated Candidate Follow-ups
              </h2>
              <p>
                For prospective candidates, send automated, periodic follow-ups
                and value-adds to nurture long-term relationships
              </p>
            </div>
            <div style={{ padding: "40px" }}>
              <h2>
                <span className="follow">Kula Outreach</span> <br />
                Automated Candidate Follow-ups
              </h2>
              <p>
                For prospective candidates, send automated, periodic follow-ups
                and value-adds to nurture long-term relationships
              </p>
            </div>
          </div>
          <div className="service">
            <video
              style={{
                borderRadius: "100px",
                height: "80%",
                width: "600px",
              }}
              ref={videoRef}
              autoPlay={true}
              loop={true}
              src={vdanimate3}
            ></video>
          </div>
        </div>

        <div className="services">
          <div className="service">
            <img
              style={{ width: "100%" }}
              src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630784570e9cb4b078b04708_analytics-p-800.png"
              alt=""
            />
          </div>
          <div className="service">
            <img
              style={{ width: "100%" }}
              src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630784259c00aa8223a76393_extens-p-800.png"
              alt=""
            />
          </div>
        </div>

        <div className="services" style={{ marginTop: "0" }}>
          <div className="service">
            <h2>Analytics</h2>
            <p>
              Measure the talent pipeline, manage recruiting performance, and
              forecast predictably by having complete visibility over the
              metrics that matter for your recruitment process.
            </p>
          </div>
          <div className="service">
            <h2>Kula Everywhere</h2>
            <p>
              Meet our chrome extension. It lets you add contacts to Kula just
              as easily as you would want it. One-click and your fresh prospect
              is ready for a personalized reach out.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <img
            style={{ width: "20%" }}
            src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/630752a7b57278d2875efd5c_soc2.svg"
            alt=""
          />
          <h1 style={{ fontSize: "35px" }}>
            Security isn't an afterthought for us
          </h1>
          <p style={{ textAlign: "center", justifyContent: "center" }}>
            Our secure development practices have enterprise-grade security
            baked in, by design. The SOC 2 Type II certification, user
            permissions, and role controls mitigate cybersecurity risks and
            ensure greater peace of mind.
          </p>
        </div>

        <div className="services">
          <div className="service">
            <h1>Plays well with your recruitment stack</h1>
            <p>
              Kula integrates with your prospecting tools, ATS, and everything
              else in your hiring stack. Thus, saving you hours of time and
              boat-loads of frustration from copying data and updating status on
              multiple excel sheets and dashboards for every new candidate.
            </p>
          </div>
          <div className="service">
            <img
              style={{ width: "90%", borderRadius: "40px" }}
              src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6307228139b4fd29c85e516c_34.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
