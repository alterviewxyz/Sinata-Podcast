// @flow
import React, { useEffect } from "react";
import styles from "./Newsletter.module.scss";

type Props = {
  copyright: string
};

const Newsletter = ({  }: Props) => {
  useEffect(() => {
    const js = `
    function ml_webform_success_1484552() {
      var $ = ml_jQuery || jQuery;
      $('.ml-subscribe-form-1484552 .ml-block-success').show();
      $('.ml-subscribe-form-1484552 .ml-block-form').hide();
    };
  `;
    const script = document.createElement("script");
    const scriptText = document.createTextNode(js);
    script.appendChild(scriptText);
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src =
      "https://static.mailerlite.com/js/w/webforms.min.js?vd890ed88b3a28c805acc70e1a88fa27c";
    document.body.appendChild(script2);
  }, []);
  return (
    <section id="signup" className="gradient-gray">
      <div id="mlb2-1484552" className="ml-subscribe-form ml-subscribe-form-1484552">
        <div className="ml-vertical-align-center">
          <div className="subscribe-form ml-block-success" style={{ display: "none" }}>
            <div className="form-section">
              <p>ثبت‌نام با موفقیت انجام شد!</p>
            </div>
          </div>
          <form
            className="ml-block-form"
            action="https://landing.mailerlite.com/webforms/submit/v1b1m4"
            data-id="v1b1m4"
            data-code="v1b1m4"
            method="POST"
            target="_blank"
          >
            <span className="signup-title">خبرنامه</span>
            <div className="subscribe-form">
              <div className="form-section">
                <div className="form-group ml-field-email ml-validate-required ml-validate-email">
                  <input
                    type="email"
                    name="fields[email]"
                    className="form-control signup-text"
                    placeholder="آدرس ایمیل"
                    autoComplete="email"
                    spellCheck="false"
                    autoCapitalize="off"
                    autoCorrect="off"
                  />
                  <input type="hidden" name="ml-submit" value="1" />
                  <button type="submit" className="primary signup-button">
                    ثبت
                  </button>
                  <button disabled style={{ display: "none" }} type="button" className="loading">
                    در حال ثبت
                    {/* <img
                  src="https://static.mailerlite.com/images/rolling@2x.gif"
                  alt="loading..."
                  width="20"
                  height="20"
                  style={{ width: '20px', height: '20px' }}
                /> */}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
