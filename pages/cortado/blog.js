import Head from "next/head";
import BlogLayout from "../../components/blog/BlogLayout";
import BlogIssueCard from "../../components/blog/BlogIssueCard";

const Blog = ({ issues }) => (
  <BlogLayout>
    <Head>
      <title>Cortado Blog | YSTT</title>
    </Head>
    <div className="container my-5 pt-3">
      <h1 className="pt-5 text-center">Cortado Journal</h1>
      <h2 className="pt-3 text-center">Our latest issues:</h2>
      {issues ? (
        <div>
          {issues.map(issue => {
            return <BlogIssueCard key={issue.articles[0].id} issue={issue} />;
          })}
        </div>
      ) : (
        <p>No issues to display yet!</p>
      )}
    </div>
  </BlogLayout>
);

Blog.getInitialProps = async ctx => {
  const articles = await fetchArticles();
  let issues = await createIssues(articles);
  console.log(issues);
  if (!issues.articles) {
    issues = null;
  }
  return { issues };
};

const fetchArticles = async () => {
  const server = process.env.API_ADDRESS;

  const res = await fetch(`${server}/api/cortado`, {
    method: "GET",
  });

  const data = await res.json();
  if (data.success) {
    return data.data;
  } else {
    console.log(data.msg);
  }
};

const createIssues = async articles => {
  const server = process.env.API_ADDRESS;

  const res = await fetch(`${server}/api/cortado/index`, {
    method: "GET",
  });
  const data = await res.json();

  if (data.tags && data.issues) {
    const createdIssues = [];
    await data.issues.forEach(issueName => {
      const articlesInIssue = [];
      articles.forEach(item => {
        if (item.issue === issueName) {
          articlesInIssue.push(item);
        }
      });
      createdIssues.push({ issue: issueName, articles: articlesInIssue });
    });

    return createdIssues.reverse();
  } else {
    console.log(`Data error: ${data.msg}`);
  }
};

export default Blog;
