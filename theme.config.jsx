export default {
    logo: (
      <>
        <img width="36" height="36" src="/logo.svg" alt="Agent Workshop @ CMU" />
        <span style={{ marginLeft: '.4em', fontWeight: 800 }}>Agent Workshop @ Carnegie Mellon University</span>
      </>
    ),
    project: {
      link: 'https://cmu-agent-workshop.github.io/',
    },
    search: {
        placeholder: 'Search contents',
    },
    feedback: {
        content: null,
    },
    edit: {
        content: null,
    },
    footer: {
        text: (
          <span>
            MIT {new Date().getFullYear()} ©{' '}
            <a href="https://zhuhao.me" target="_blank">
              Hao Zhu
            </a>
            .
          </span>
        )
    },
    head: (
      <>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.ico" type="image/ico" />
      </>
    ),
    useNextSeoProps() {
        return {
        titleTemplate: '%s – LLM Agents workshop at CMU May 2-3',
        description: 'We are hosting LLM Agents workshop at Carnegie Mellon University, Pittsburgh, PA, USA on May 2-3.',
        openGraph: {
            type: 'website',
            images: [
              {
                url: 'https://cmu-agent-workshop.github.io/cover.jpg',
              }
            ],
            locale: 'en_US',
            url: 'https://cmu-agent-workshop.github.io/',
            siteName: 'LLM Agents workshop at CMU May 2-3',
            description: 'We are hosting LLM Agents workshop at Carnegie Mellon University, Pittsburgh, PA, USA on May 2-3.',
        },
        twitter: {
            cardType: 'summary_large_image',
            image: 'https://cmu-agent-workshop.github.io/cover.jpg',
        },
        }
        
    },
    // ... other theme options
  }