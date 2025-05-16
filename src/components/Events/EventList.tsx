import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Grid, 
  TextField, 
  IconButton, 
  Avatar, 
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { mockEvents, Event } from '../../mocks/events';
import { mockComments, Comment } from '../../mocks/comments';

const EventList: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const [events] = useState<Event[]>(groupId ? mockEvents[groupId] || [] : []);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [comment, setComment] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  // 获取当前选中活动的评论
  const eventComments = selectedEvent 
    ? mockComments.filter(c => c.eventId === selectedEvent.id)
    : [];

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // 模拟提交
    alert('提交成功！');
    setComment('');
    setImage(null);
    setSelectedEvent(null);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // 格式化日期
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        挑战活动
      </Typography>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="180"
                image={event.imageUrl}
                alt={event.title}
                sx={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div" fontWeight={700} fontSize={22}>
                  {event.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.7 }}>
                  {event.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                  开始日期: {event.startDate}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                  结束日期: {event.endDate}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  size="large"
                  fullWidth
                  onClick={() => {
                    setSelectedEvent(event);
                    handleOpenDialog();
                  }}
                >
                  参与挑战
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h6" component="div">
            挑战记录
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          {selectedEvent && (
            <>
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontWeight={700}>
                  {selectedEvent.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedEvent.description}
                </Typography>
              </Box>
              
              <TextField
                fullWidth
                multiline
                rows={4}
                label="评论"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                sx={{ mb: 2 }}
              />
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="icon-button-file"
                type="file"
                onChange={handleImageChange}
              />
              {/* <label htmlFor="icon-button-file">
                <IconButton color="primary" component="span">
                  <CloudUpload />
                </IconButton>
              </label> */}
              {image && <Typography variant="body2">{image.name}</Typography>}
            </>
          )}

          <Grid container spacing={2} sx={{ mt: 2 }}>
            {eventComments.map((comment) => (
              <Grid item xs={12} sm={6} md={4} key={comment.id}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>
                        {comment.userName[0]}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2">{comment.userName}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {formatDate(comment.createdAt)}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {comment.content}
                    </Typography>
                    {comment.imageUrl && (
                      <Box
                        component="img"
                        src={comment.imageUrl}
                        alt="挑战证明"
                        sx={{
                          width: '100%',
                          height: 150,
                          objectFit: 'cover',
                          borderRadius: 1,
                          mt: 1
                        }}
                      />
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>取消</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            提交
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EventList; 