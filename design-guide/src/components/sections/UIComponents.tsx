import {
    ButtonGuide,
    CardGuide,
    BadgeGuide,
    TabsGuide,
    AccordionGuide,
    AlertGuide,
    BreadcrumbGuide,
    PaginationGuide,
    CalendarGuide,
    CheckboxGuide,
    CarouselGuide,
    CollapsibleGuide,
    CommandGuide,
    DropdownMenuGuide,
    OverlaysGuide,
    FormGuide,
    TooltipHoverGuide,
    ProgressSkeletonGuide,
    LayoutUtilitiesGuide,
    SelectGuide,
    SidebarGuide,
    ToastGuide,
    TableGuide,
    ToggleGuide
} from './ui-components';

export function UIComponents() {
    return (
        <section id="components" className="scroll-mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2"><budoux-ja>5. UIコンポーネント</budoux-ja></h3>

            <div className="space-y-12">
                <ButtonGuide />
                <CardGuide />
                <BadgeGuide />
                <TabsGuide />
                <AccordionGuide />
                <AlertGuide />
                <BreadcrumbGuide />
                <PaginationGuide />
                <CalendarGuide />
                <CheckboxGuide />
                <CarouselGuide />
                <CollapsibleGuide />
                <CommandGuide />
                <DropdownMenuGuide />
                <OverlaysGuide />
                <FormGuide />
                <TooltipHoverGuide />
                <ProgressSkeletonGuide />
                <LayoutUtilitiesGuide />
                <SelectGuide />
                <SidebarGuide />
                <ToastGuide />
                <TableGuide />
                <ToggleGuide />
            </div>
        </section>
    );
}
