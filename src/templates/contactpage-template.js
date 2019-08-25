// @flow
import React from 'react';
import { useForm, ValidationError } from '@statickit/react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

function MyForm() {
    const [state, submit] = useForm('21588a1dfab0');
  
    // Display success message in place of the form
    if (state.succeeded) {
      return (
        <div>تشکر! پیام شما به دست ما رسید.</div>
      )
    }
  
    // Render email validation errors and
    // disable the submit button when submitting
    return (
      <form class="form-style-7" onSubmit={submit}>
        <ul>
          <li>
              <label for="name">نام و نام خانوادگی</label>
              <input type="text" name="name" maxlength="100" required />
              <span>نامتان را اینجا وارد کنید.</span>
          </li>
          <li>
              <label for="email">ایمیل</label>
              <input type="email" name="email" maxlength="100" required />
              <span>پاسخ پیام شما به این ایمیل ارسال خواهد شد.</span>
          </li>
          <li>
              <label for="url">وب‌سایت</label>
              <input type="url" name="url" maxlength="100" />
              <span>وب‌سایت شخصی یا برند شما</span>
          </li>
          <li>
              <label for="bio">متن پیام</label>
              <textarea name="bio" required></textarea>
              {/* <span>Say something about yourself</span> */}
          </li>
          <li>
              <input type="submit" value="ارسال پیام" disabled={state.submitting} />
          </li>
        </ul>
      </form>
    )
}

const ContactPageTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { title: pageTitle, description: pageDescription } = data.markdownRemark.frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Sidebar />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
        <MyForm />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query ContatPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;

export default ContactPageTemplate;
