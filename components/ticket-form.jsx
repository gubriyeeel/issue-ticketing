"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TicketForm = ({ ticket }) => {
  const router = useRouter();

  const editMode = ticket._id === "new" ? false : true;

  const defaultTicketData = {
    title: "",
    description: "",
    priority: 1,
    status: "open",
    category: "general",
  };

  if (editMode) {
    defaultTicketData["title"] = ticket.title;
    defaultTicketData["description"] = ticket.description;
    defaultTicketData["priority"] = ticket.priority;
    defaultTicketData["status"] = ticket.status;
    defaultTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(defaultTicketData);

  const handleChange = (name) => {
    return (value) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editMode) {
      const response = await fetch(`/api/tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("[TICKET] FAILED TO UPDATE TICKET");
      }

      toast.success("Ticket updated!");
      router.refresh();
      router.push("/");
    } else {
      const response = await fetch("/api/tickets", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("[TICKET] FAILED CREATING TICKET");
      }

      toast.success("Ticket created!");
      router.refresh();
      router.push("/");
    }
  };

  return (
    <Card className="w-full sm:max-w-96">
      <CardHeader>
        <CardTitle className="text-xl">
          {editMode ? "Update" : "Create"}
        </CardTitle>
        <CardDescription className="font-light">
          {editMode ? "Update your ticket" : "Create a new ticket"}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <Input
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={(e) => handleChange("title")(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <Textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={(e) => handleChange("description")(e.target.value)}
              rows={5}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="priority">Priority</label>
            <Input
              id="priority"
              name="priority"
              type="number"
              required
              min={1}
              max={5}
              value={formData.priority}
              onChange={(e) => handleChange("priority")(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label>Category</label>
              <Select
                name="category"
                defaultValue={formData.category}
                onValueChange={handleChange("category")}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="bug">Bug</SelectItem>
                  <SelectItem value="feature">Feature</SelectItem>
                  <SelectItem value="hardware">Hardware</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <label>Status</label>
              <Select
                name="status"
                defaultValue={formData.status}
                onValueChange={handleChange("status")}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit">{editMode ? "Update" : "Create"}</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TicketForm;
