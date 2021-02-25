import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Project Page', isActive: true },
];

const ProjectPage = () => {
  return (
    <PageContainer heading={<IntlMessages id="pages.projectPage" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12}>
          <Box>
            <IntlMessages id="pages.projectPage.description" />
          </Box>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default ProjectPage;
