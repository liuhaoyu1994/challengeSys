import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { mockGroups, Group } from '../../mocks/groups';

const GroupList: React.FC = () => {
  const [groups] = useState<Group[]>(mockGroups);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        挑战小组
      </Typography>
      <Grid container spacing={3}>
        {groups.map((group) => (
          <Grid item xs={12} sm={6} md={4} key={group.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="180"
                image={group.imageUrl}
                alt={group.name}
                sx={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div" fontWeight={700} fontSize={22}>
                  {group.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                  {group.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(`/groups/${group.id}/events`)}
                  sx={{ mt: 2 }}
                  size="large"
                  fullWidth
                >
                  查看挑战
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GroupList; 