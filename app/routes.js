// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import {
  getAsyncInjectors
} from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const {
    injectReducer,
    injectSagas
  } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [{
    path: '/',
    name: 'homePage',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        import ('containers/HomePage/reducer'),
        import ('containers/HomePage/sagas'),
        import ('containers/HomePage'),
      ]);

      const renderRoute = loadModule(cb);

      importModules.then(([reducer, sagas, component]) => {
        injectReducer('homePage', reducer.default);
        injectSagas(sagas.default);
        renderRoute(component);
      });

      importModules.catch(errorLoading);
    },
    childRoutes: [{
      path: 'authors',
      name: 'authorsView',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import ('containers/AuthorsView/reducer'),
          import ('containers/AuthorsView')
        ]);
        const renderRoute = loadModule(cb);
        importModules.then(([reducer, component]) => {
          injectReducer('authorsView', reducer.default);
          renderRoute(component);
        });
        importModules.catch(errorLoading);
      },
      childRoutes: [{
        path: ':author_name',
        name: 'authorsViewSingle',
        getComponent(nextState, cb) {
          const importModules = Promise.all([
            import ('containers/AuthorsViewSingle/sagas'),
            import ('containers/AuthorsViewSingle/reducer'),
            import ('containers/AuthorsViewSingle')
          ]);
          const renderRoute = loadModule(cb);
          importModules.then(([sagas, reducer, component]) => {
            injectSagas(sagas.default);
            injectReducer('authorsViewSingle', reducer.default);
            renderRoute(component);
          });
          importModules.catch(errorLoading);
        }
      }]
    },{
      path: 'works',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import ('containers/HomePage/reducer'),
          import ('containers/HomePage/sagas'),
          import ('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('homePage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }
    }]
  }, {
    path: '/cms',
    name: 'cmsPage',
    getComponent(location, cb) {
      import ('containers/CmsPage')
      .then(loadModule(cb))
        .catch(errorLoading);
    },
  }, {
    path: '*',
    name: 'notfound',
    getComponent(nextState, cb) {
      import ('containers/NotFoundPage')
      .then(loadModule(cb))
        .catch(errorLoading);
    },
  }, ];
}
