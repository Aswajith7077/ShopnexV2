type BannerBlobType = {
  bucket: string;
  file_path: string;
  file_name: string;
};

enum ContentAlignmentEnum {
  left = 'left',
  right = 'right',
}

type BannerResponseType = {
  title: string;
  description: string;
  deal_page: string;
  file_url: string;
  banner: BannerBlobType;
  content_alignment: ContentAlignmentEnum;
  text_color: string;
};

export type { BannerResponseType, BannerBlobType };

export { ContentAlignmentEnum };
