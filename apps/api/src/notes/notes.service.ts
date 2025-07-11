import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { PaginationArgs } from "@/common/dtos/pagination.args";
import { paginate } from "@/common/utils/paginate";
import { CreateNoteInput } from "@/notes/dtos/create-note.input";

@Injectable()
export class NotesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneById(id: string, userId: string) {
    return this.prismaService.note.findUnique({
      where: {
        id,
        userId,
      },
    });
  }

  async findOneOrThrow(id: string, userId: string) {
    const note = await this.findOneById(id, userId);

    if (!note) {
      throw new NotFoundException("Note not found");
    }

    return note;
  }

  async findMany(userId: string) {
    return this.prismaService.note.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  findManyWithPagination(_userId: string, _pagination: PaginationArgs) {
    return paginate();
    // return paginate({
    //   client: this.prismaService,
    //   model: "Note",
    //   where: {
    //     userId,
    //   },
    //   pagination,
    //   cursorColumn: "createdAt",
    // });
  }

  async create(data: CreateNoteInput, userId: string) {
    return await this.prismaService.note.create({
      data: {
        ...data,
        userId,
        content: "",
      },
    });
  }

  async delete(noteId: string, userId: string) {
    await this.findOneOrThrow(noteId, userId);

    return this.prismaService.note.delete({
      where: {
        id: noteId,
      },
    });
  }

  async update(noteId: string, content: string, userId: string) {
    await this.findOneOrThrow(noteId, userId);

    return this.prismaService.note.update({
      where: {
        id: noteId,
      },
      data: {
        content,
      },
    });
  }

  async toggleLock(noteId: string, userId: string) {
    const note = await this.findOneOrThrow(noteId, userId);

    return this.prismaService.note.update({
      where: {
        id: noteId,
      },
      data: {
        isLocked: !note.isLocked,
      },
    });
  }
}
