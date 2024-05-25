"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, TextField } from "@mui/material";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  trackingNumber: z.string().min(1, "กรุณากรอกเลขพัสดุ"),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  onSubmit: (values: FormValues) => void;
};

export default function TrackForm({ onSubmit }: Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      trackingNumber: "0987654321",
    },
  });

  const onFormSubmit: SubmitHandler<FormValues> = (values) => {
    onSubmit(values);
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      onSubmit={form.handleSubmit(onFormSubmit)}
    >
      <Controller
        name="trackingNumber"
        control={form.control}
        render={({ field, fieldState }) => (
          <TextField
            margin="dense"
            variant="standard"
            label="กรอกเลขพัสดุ"
            onChange={field.onChange}
            value={field.value}
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
            sx={{
              width: {
                xs: "100%",
                sm: "300px",
              },
            }}
          />
        )}
      />

      <Button type="submit" variant="contained" startIcon={<SearchIcon />}>
        ตรวจสอบ
      </Button>
    </Box>
  );
}
