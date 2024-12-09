import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '由 MDX 提供支持',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        让您节省时间、专注于文档编写。您只需采用 MDX 格式编写文档和博文， Docusaurus 就会将它们构建成静态的 HTML 文件供用户访问。 您甚至可以在 Markdown 中嵌入 React 组件，这一切都得益于 MDX。
      </>
    ),
  },
  {
    title: '文档版本化',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
     让用户可以查看您的项目的所有版本的文档。文档版本化功能可以帮 您保持文档与项目版本的同步。
      </>
    ),
  },
  {
    title: '基于 React 构建',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        利用 React 组件可以为您的项目扩展或自定义页面布局。 得益于 Docusaurus 的插件架构，在设计您自己的 网站的同时，仍然能够重用由 Docusaurus 插件所创建的数据。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
